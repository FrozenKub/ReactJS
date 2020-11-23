import React, {useRef, useEffect} from "react";

import gsap from "gsap"

export default function Main() {
    let logoIcon = useRef(null);

    useEffect(()=>
    {
        document.addEventListener("mousemove", function(e){

            if (e.x>logoIcon.getBoundingClientRect().x
                && e.x<logoIcon.getBoundingClientRect().x + logoIcon.getBoundingClientRect().width
                && e.y>logoIcon.getBoundingClientRect().y
                && e.y<logoIcon.getBoundingClientRect().y + logoIcon.getBoundingClientRect().height)

                if (e.x > logoIcon.getBoundingClientRect().x
                    && e.x < logoIcon.getBoundingClientRect().x + (logoIcon.getBoundingClientRect().width/2))
                {
                    let valueXLeft = (logoIcon.getBoundingClientRect().width/2 - (e.x - logoIcon.getBoundingClientRect().x))/10;
                    gsap.to(logoIcon, 1, {rotationY: -1 * valueXLeft})
                }

                if (e.x > logoIcon.getBoundingClientRect().x + (logoIcon.getBoundingClientRect().width/2)
                    && e.x < logoIcon.getBoundingClientRect().x + (logoIcon.getBoundingClientRect().width))
                {
                    let valueXRight = (e.x - logoIcon.getBoundingClientRect().x - logoIcon.getBoundingClientRect().width/2)/10;
                    gsap.to(logoIcon, 1, {rotationY: valueXRight})
                }

            if (e.y > logoIcon.getBoundingClientRect().y
                && e.y < logoIcon.getBoundingClientRect().y + (logoIcon.getBoundingClientRect().height/2))
            {
                let valueYTop = (logoIcon.getBoundingClientRect().height/2 - (e.y - logoIcon.getBoundingClientRect().y))/10;
                gsap.to(logoIcon, 1, {rotationX: 1 * valueYTop})
            }

            if (e.y > logoIcon.getBoundingClientRect().y + (logoIcon.getBoundingClientRect().height/2)
                && e.y < logoIcon.getBoundingClientRect().y + (logoIcon.getBoundingClientRect().height))
            {
                let valueYBottom = (e.y - logoIcon.getBoundingClientRect().y - logoIcon.getBoundingClientRect().height/2)/10;
                gsap.to(logoIcon, 1, {rotationX: -1 * valueYBottom})
            }
            else {
                gsap.to(logoIcon, 2, {rotationX: 0})
                gsap.to(logoIcon, 2, {rotationY: 0})
            }

        })

    }, [])

    console.log(logoIcon);

    return (
        <div className="centered">
        <img ref={el => {logoIcon=el}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt584rMTJ8Yqb6UxgqiV130sgnmDVEMSp8Bw&usqp=CAU" width="800px" height="800px"/>
        </div>
    );
}