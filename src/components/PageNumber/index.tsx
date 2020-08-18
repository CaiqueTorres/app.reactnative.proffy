import React, { useState, useEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';

import { ContainerView } from './styles'

interface PageNumberProps {
    pagesAmount: number
    pageNumberSelected: number
}

const PageNumber: React.FC<PageNumberProps> = ({ pagesAmount, pageNumberSelected }) => {

    const [pages, setPages] = useState<Element[]>([])
    const [currentPage, setCurrentPage] = useState(pageNumberSelected)

    // useEffect(() => {
    //     const newArray = []
    //     for (let i = 0; i < pagesAmount; i++) {
    //         newArray.push(
    //             <FontAwesome
    //                 name="circle"
    //                 size={24}
    //                 color="black"
    //             />
    //         )
    //     }
    //     setPages(newArray)
    // }, [pageNumberSelected])

    // function* showCirclesVector() {
    //     for (let i = 0; i < pagesAmount; i++) {
    //         if (i == pageNumberSelected) {
    //             yield
    //             (<FontAwesome
    //                 name="circle"
    //                 size={24}
    //                 color="black"
    //             />)
    //         }
    //         yield
    //         (<FontAwesome
    //             name="circle"
    //             size={24}
    //             color="green"
    //         />)
    //     }
    // }

    return (
        <ContainerView>

        </ContainerView>
    )
}

export default PageNumber
