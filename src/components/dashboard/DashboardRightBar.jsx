import React from 'react'
import Header from './Header'
import Box from '@mui/material/Box';
import CommonBox from './CommonBox';
import {
    ArrowUpwardIcon,
    ArrowDownwardIcon,
    CurrencyExchangeIcon,
    BookmarkBorderIcon,
    CardGiftcardIcon,
    AddAlarmIcon
} from '../StaticImages';
import ChartWrapper from './ChartWrapper';


export default function DashboardRightBar({ toggelmenu }) {

    return (
        <div className='DashboardRightBar'>
            <Header
                toggelmenu={toggelmenu}
            />
            <Box className="CommonBoxFlexdiv dflex jbetween">
                <CommonBox
                    bgColor="bgpinkgradient"
                    Icon={CurrencyExchangeIcon}
                    IconColor="bggreen"
                    title="Earning"
                    currency="$198k"
                    Arrow={ArrowUpwardIcon}
                    showpercentage="37.8%"
                    month="this month"
                    updownColor="textgreen"
                />
                <CommonBox
                    Icon={BookmarkBorderIcon}
                    bgColor="bgbluegradient"
                    IconColor="bggray"
                    title="Orders"
                    currency="$2.4k"
                    Arrow={ArrowDownwardIcon}
                    showpercentage="3%"
                    month="this month"
                    updownColor="textred"
                />
                <CommonBox
                    Icon={CardGiftcardIcon}
                    bgColor="bgpinkgradient"
                    IconColor="bgblue"
                    title="Balance"
                    currency="$2.3k"
                    Arrow={ArrowUpwardIcon}
                    showpercentage="35%"
                    month="this month"
                    updownColor="textgreen"
                />
                <CommonBox
                    Icon={AddAlarmIcon}
                    bgColor="bgbluegradient"
                    IconColor="bgred"
                    title="Total Sales"
                    currency="$198k"
                    Arrow={ArrowDownwardIcon}
                    showpercentage="8%"
                    month="this month"
                    updownColor="textred"
                />
            </Box>
            <ChartWrapper />
        </div>
    )
}
