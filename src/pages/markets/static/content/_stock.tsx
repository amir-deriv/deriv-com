import React from 'react'
import { Localize } from 'components/localization'
import ExtendedTime from 'images/svg/stock-indices/stocks-minimum-capital.svg'
import FriendlySupport from 'images/svg/markets/friendly-support-new.svg'
import MinimalCapital from 'images/svg/stock-indices/stocks-extended-time.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-another.svg'
import PractiseIcon from 'images/svg/markets/aim-new.svg'
import TradeIcon from 'images/svg/markets/trade-new.svg'
import WithdrawIcon from 'images/svg/markets/deposit-and-withdrawal-new.svg'

type Stock = {
    src: string
    text: React.ReactNode
    alt: string
}

export const simple_step_content_stock = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
        icon: <img src={PractiseIcon} alt="Practise" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading stocks & indices and other markets." />
        ),
        icon: <img src={TradeIcon} alt="Trade" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
        icon: <img src={WithdrawIcon} alt="Withdraw" width="32" height="32" />,
    },
]

const stocks: Stock[] = [
    {
        src: ExtendedTime,
        alt: 'Low capital',
        text: <Localize translate_text="Minimal capital requirements, limited risk" />,
    },
    {
        src: MinimalCapital,
        alt: 'Time to trade',
        text: <Localize translate_text="Extended trading time, up to 18 hours a day" />,
    },
    {
        src: WithdrawIcon,
        alt: 'Easy deposits and withdrawals',
        text: <Localize translate_text="Fast and secure deposit and withdrawal options" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'Simple trading platforms',
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: FriendlySupport,
        alt: 'Smart support team',
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]
export default stocks
