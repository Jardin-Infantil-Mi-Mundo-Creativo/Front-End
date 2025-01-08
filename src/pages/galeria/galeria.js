import { useState, useEffect } from 'react'
import "./galeria.css"
import img_1 from "../../assets/vacaciones-recreativas/img_1.jpg"
import img_2 from "../../assets/vacaciones-recreativas/img_2.jpg"
import img_3 from "../../assets/vacaciones-recreativas/img_3.jpg"
import img_4 from "../../assets/vacaciones-recreativas/img_4.jpg"
import img_5 from "../../assets/vacaciones-recreativas/img_5.jpg"
import img_6 from "../../assets/vacaciones-recreativas/img_6.jpg"
import img_7 from "../../assets/vacaciones-recreativas/img_7.jpg"
import img_8 from "../../assets/vacaciones-recreativas/img_8.jpg"
import img_9 from "../../assets/vacaciones-recreativas/img_9.jpg"
import img_10 from "../../assets/vacaciones-recreativas/img_10.jpg"
import img_11 from "../../assets/vacaciones-recreativas/img_11.jpg"
import img_12 from "../../assets/vacaciones-recreativas/img_12.jpg"
import img_13 from "../../assets/vacaciones-recreativas/img_13.jpg"
import img_14 from "../../assets/estudio-dirigido/img_14.jpg"
import img_15 from "../../assets/estudio-dirigido/img_15.jpg"
import img_16 from "../../assets/estudio-dirigido/img_16.jpg"
import img_17 from "../../assets/estudio-dirigido/img_17.jpg"
import img_18 from "../../assets/estudio-dirigido/img_18.jpg"
import img_19 from "../../assets/estudio-dirigido/img_19.jpg"
import img_20 from "../../assets/brujitas/img_1.jpg"
import img_21 from "../../assets/formacion-abc/img_1.jpg"
import img_22 from "../../assets/formacion-abc/img_2.jpg"
import img_23 from "../../assets/formacion-abc/img_3.jpg"
import vid_24 from "../../assets/abuelos/vid_1.mp4"
import vid_25 from "../../assets/abuelos/vid_2.mp4"
import vid_26 from "../../assets/abuelos/vid_3.mp4"
import vid_27 from "../../assets/abuelos/vid_4.mp4"
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar'

export default function Informacion() {

    const images1 = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10, img_11, img_12, img_13];
    const [selectedIndex1, setSelectIndex1] = useState(0);
    const [selectedImage1, setSelectImage1] = useState(images1[0]);

    const selectNewImgae1 = (images, next=true ) => {
        const condition = next ? selectedIndex1 < images.length-1 : selectedIndex1 > 0;
        const nextIndex = next ? (condition ? selectedIndex1 + 1: 0): condition ? selectedIndex1 -1: images.length - 1;
        setSelectImage1(images[nextIndex]);
        setSelectIndex1(nextIndex);
        var imagen = document.getElementById("imagen1")
        imagen.removeChild(imagen.firstChild)
        var hijo = document.createElement("img")
        hijo.className = 'informacion-container-carrusel-imagen'
        hijo.src = selectedImage1
        imagen.appendChild(hijo)
    
    }

    const images2 = [img_14, img_15, img_16, img_17, img_18, img_19];
    const [selectedIndex2, setSelectIndex2] = useState(0);
    const [selectedImage2, setSelectImage2] = useState(images2[0]);

    const selectNewImgae2 = (images, next=true ) => {
        const condition = next ? selectedIndex2 < images.length-1 : selectedIndex2 > 0;
        const nextIndex = next ? (condition ? selectedIndex2 + 1: 0): condition ? selectedIndex2 -1: images.length - 1;
        setSelectImage2(images[nextIndex]);
        setSelectIndex2(nextIndex);
        var imagen = document.getElementById("imagen2")
        imagen.removeChild(imagen.firstChild)
        var hijo = document.createElement("img")
        hijo.className = 'informacion-container-carrusel-imagen'
        hijo.src = selectedImage2
        imagen.appendChild(hijo)
    
    }

    const images3 = [img_20];
    const [selectedIndex3, setSelectIndex3] = useState(0);
    const [selectedImage3, setSelectImage3] = useState(images3[0]);

    const selectNewImgae3 = (images, next=true ) => {
        const condition = next ? selectedIndex3 < images.length-1 : selectedIndex3 > 0;
        const nextIndex = next ? (condition ? selectedIndex3 + 1: 0): condition ? selectedIndex3 -1: images.length - 1;
        setSelectImage3(images[nextIndex]);
        setSelectIndex3(nextIndex);
        var imagen = document.getElementById("imagen3")
        imagen.removeChild(imagen.firstChild)
        var hijo = document.createElement("img")
        hijo.className = 'informacion-container-carrusel-imagen'
        hijo.src = selectedImage3
        imagen.appendChild(hijo)
    
    }

    const images4 = [img_21, img_22, img_23];
    const [selectedIndex4, setSelectIndex4] = useState(0);
    const [selectedImage4, setSelectImage4] = useState(images4[0]);

    const selectNewImgae4 = (images, next=true ) => {
        const condition = next ? selectedIndex4 < images.length-1 : selectedIndex4 > 0;
        const nextIndex = next ? (condition ? selectedIndex4 + 1: 0): condition ? selectedIndex4 -1: images.length - 1;
        setSelectImage4(images[nextIndex]);
        setSelectIndex4(nextIndex);
        var imagen = document.getElementById("imagen4")
        imagen.removeChild(imagen.firstChild)
        var hijo = document.createElement("img")
        hijo.className = 'informacion-container-carrusel-imagen'
        hijo.src = selectedImage4
        imagen.appendChild(hijo)
    
    }


    useEffect(() => {
        const interval = setInterval(() => {
            selectNewImgae1(images1, true)
            selectNewImgae2(images2, true)
            selectNewImgae4(images4, true)
        }, 4000);
        return () => clearInterval(interval)
    })

    return (

        <div className='informacion-container'>

        <Navbar />

        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
            className='informacion-container-title'>
                Galeria
        </motion.p>

        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
            className='galeria-heading2'>
                Vacaciones recreativas
        </motion.p>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
            className='informacion-container-carrusel'>
                <div id='imagen1' className='informacion-container-carrusel-container'>
                    <img className='informacion-container-carrusel-imagen' src={selectedImage1} alt="slide"></img>
                </div>
        </motion.div>

        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
            className='galeria-heading2'>
                Estudio dirigido
        </motion.p>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
            className='informacion-container-carrusel'>
                <div id='imagen2' className='informacion-container-carrusel-container'>
                    <img className='informacion-container-carrusel-imagen' src={selectedImage2} alt="slide"></img>
                </div>
        </motion.div>

        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
            className='galeria-heading2'>
                Día de las brujitas
        </motion.p>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
            className='informacion-container-carrusel'>
                <div id='imagen3' className='informacion-container-carrusel-container'>
                    <img className='informacion-container-carrusel-imagen' src={selectedImage3} alt="slide"></img>
                </div>
        </motion.div>

        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
            className='galeria-heading2'>
                Formación a la entrada ABC
        </motion.p>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
            className='informacion-container-carrusel'>
                <div id='imagen4' className='informacion-container-carrusel-container'>
                    <img className='informacion-container-carrusel-imagen' src={selectedImage4} alt="slide"></img>
                </div>
        </motion.div>

        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
            className='galeria-heading2'>
                Día de los abuelos
        </motion.p>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
            className='informacion-container-carrusel'>
                <video className='informacion-container-carrusel-container' autoPlay loop muted playsInline>
                    <source className='informacion-container-carrusel-imagen' src={vid_24} type="video/mp4" />
                </video>
                <video className='informacion-container-carrusel-container' autoPlay loop muted playsInline>
                    <source className='informacion-container-carrusel-imagen' src={vid_25} type="video/mp4" />
                </video>                <video className='informacion-container-carrusel-container' autoPlay loop muted playsInline>
                    <source className='informacion-container-carrusel-imagen' src={vid_26} type="video/mp4" />
                </video>                <video className='informacion-container-carrusel-container' autoPlay loop muted playsInline>
                    <source className='informacion-container-carrusel-imagen' src={vid_27} type="video/mp4" />
                </video>
        </motion.div>

    </div>
    )
}
