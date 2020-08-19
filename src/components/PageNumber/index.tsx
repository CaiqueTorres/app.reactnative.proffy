import React, { useState, useEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';

import {
    ContainerView,
    CircleView
} from './styles'

interface PageNumberProps {
    pagesAmount: number
    pageNumberSelected: number
}

const PageNumber: React.FC<PageNumberProps> = ({ pagesAmount, pageNumberSelected }) => {
    const [currentPage, setCurrentPage] = useState<boolean[]>([])

    useEffect(() => {
        const array = []
        for (let i = 0; i < pagesAmount; i++)
            array.push(pageNumberSelected == i)

        setCurrentPage([...currentPage, ...array])
    }, [])

    return (
        <ContainerView>
            {currentPage.map(pageNumber =>
                <CircleView>
                    <FontAwesome
                        name="circle"
                        size={5}
                        color={pageNumber ? "#8257E5" : "#C1BCCC"}
                    />
                </CircleView>
            )}
        </ContainerView>
    )
}

export default PageNumber
