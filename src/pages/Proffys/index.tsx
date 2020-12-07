import React from 'react'

import { ContainerSafeAreaView } from './styles'

import Proffy from '../../components/molecules/Proffy'

import { WeekDay } from '../../api/time'
import profileImage from '../../assets/images/profile.jpg'

const ProffysPage: React.FC = (): JSX.Element => {
    return (
        //#region JSX

        <ContainerSafeAreaView>
            <Proffy
                profileImage={profileImage}
                name="Fulano"
                subject="Matéria"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum."
                price={20}
                workDays={[
                    {
                        weekDay: WeekDay.MONDAY,
                        from: '15:00',
                        to: '17:00'
                    },
                    {
                        weekDay: WeekDay.TUESDAY,
                        from: '15:00',
                        to: '17:00'
                    },
                    {
                        weekDay: WeekDay.WEDNESDAY,
                        from: '15:00',
                        to: '17:00'
                    },
                    {
                        weekDay: WeekDay.THURSDAY,
                        from: '15:00',
                        to: '17:00'
                    },
                    {
                        weekDay: WeekDay.FRIDAY,
                        from: '15:00',
                        to: '17:00'
                    }
                ]}
            />
        </ContainerSafeAreaView>

        //#endregion
    )
}

ProffysPage.displayName = 'ProffysPage'

export default ProffysPage
