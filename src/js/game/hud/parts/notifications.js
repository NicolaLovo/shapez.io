import { BaseHUDPart } from "../base_hud_part";
import { makeDiv } from "../../../core/utils";

/** @enum {string} */
export const enumNotificationType = {
    saved: "saved",
    upgrade: "upgrade",
    success: "success",
};

export class HUDNotifications extends BaseHUDPart {
    createElements(parent) {
        this.element = makeDiv(parent, "ingame_HUD_Notifications", [], ``);
    }

    initialize() {
        this.root.hud.signals.notification.add(this.onNotification, this);

        /** @type {Array<{ element: HTMLElement, expireAt: number}>} */
        this.notificationElements = [];

        // Automatic notifications
        this.root.signals.gameSaved.add(() =>
            this.onNotification("Your game has been saved.", enumNotificationType.saved)
        );
    }

    /**
     * @param {string} message
     * @param {enumNotificationType} type
     */
    onNotification(message, type) {
        const element = makeDiv(this.element, null, ["notification", "type-" + type], message);
        element.setAttribute("data-icon", "icons/notification_" + type + ".png");

        this.notificationElements.push({
            element,
            expireAt: this.root.time.realtimeNow() + 5,
        });
    }

    update() {
        const now = this.root.time.realtimeNow();
        for (let i = 0; i < this.notificationElements.length; ++i) {
            const handle = this.notificationElements[i];
            if (handle.expireAt <= now) {
                handle.element.remove();
                this.notificationElements.splice(i, 1);
            }
        }
    }
}