import type { FC } from "react";
import { Button, IconButton } from "@concero/ui-kit";
import { CloseIcon } from "@/assets/icons/close";
import { RewardIcon } from "@/assets/icons/reward";
import "./RewardsNotification.pcss";

export const RewardsNotification: FC = () => {
    return (
        <div className="rewards_notification">
            <div className="rewards_notification_container">
                <div className="rewards_notification_content">
                    <div className="rewards_notification_icon">
                        <RewardIcon />
                    </div>
                    <div className="rewards_notification_details">
                        <div className="rewards_notification_description">
                            <span className="rewards_notification_title">Earn CERs for Every Bridge</span>
                            <span className="rewards_notification_subtitle">Earn CERs for bridges; complete quests for bonus CERs in Rewards portal</span>
                        </div>
                        <Button size="s" variant="primary">Open Rewards Portal</Button>
                    </div>
                </div>
                <IconButton variant="secondary">
                    <CloseIcon/>
                </IconButton>
            </div>
        </div>
    )
}