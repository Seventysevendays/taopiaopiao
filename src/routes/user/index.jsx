import React from 'react';
import './index.css'
import LineLink from "../../components/LineLink";
import TabMenu from "../../components/TabMunu"

const User = () => (
    <div className="user">
        <div className="user__top">
            <div className="tOperator">
                <div className="tOperator__icon tOperator__icon--setting"></div>
                <div className="tOperator__icon tOperator__icon--message"></div>
            </div>
            <div className="user__info">
                <div className="user__avatar" style={{backgroundImage:'url(/source/avatar.jpeg)'}}></div>
                <div className="user__detail">
                    <div className="user__name">周杰伦</div>
                    <div>
                        <span className="user__follow">关注100</span>
                        <span className="user__fans">被关注100</span>
                    </div> 
                    <div className="user__level">黄金会员</div>
                </div>
               
            </div>
        </div> 
        <div className="user__content">
            <LineLink title = "收藏的电影" extra = "20" href = "#"></LineLink>
            <LineLink title = "看过的电影" extra = "20" href = "#"></LineLink>
        </div>
        <TabMenu current = "user"></TabMenu>
    </div>
);

export default User;
