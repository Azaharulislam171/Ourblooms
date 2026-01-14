import styles from '../styles/Gallery.module.css'
import g from '../assets/gallery/Image.png'
import g1 from '../assets/gallery/Image-1.png'
import g2 from '../assets/gallery/Image-2.png'
import g3 from '../assets/gallery/Image-3.png'
import g4 from '../assets/gallery/Image-4.png'
import g5 from '../assets/gallery/Image-5.png'
import g6 from '../assets/gallery/Image-6.png'
import g7 from '../assets/gallery/Image-7.png'
import gA from '../assets/gallery/imageA.png'
import Footer from '../components/Footer'
import WorkWithUs from '../components/WorkWithUs'
import Services from '../components/Services'

function Gallery(){
    return(
        <>
        <div className={styles.header}>
            <h1 className="heading1"> Gallery Page</h1>
        </div>
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                <p className="caption1"> SEASONAL ARRANGEMENTS </p>
                </div>
           
                <div className={styles.galleryContainer}>
                    <div className={styles.image}>
                        <p className="caption2"> Dawn Bloom 
                            <span className="heading4"> $55/Bunch </span>
                        </p>
                    <img src={g} alt="gallery image"  />
                    </div>

                    <div className={styles.image1}>
                        <p className="caption2">Solstice Stems
                            <span className="heading4"> $30/Bunch </span>
                        </p>
                        <img src={g1} alt="gallery image" />
                    </div>

                    <div className={styles.image2}>
                        <p className="caption2">Whisper GreenS
                            <span className="heading4"> $120/Bunch</span>
                        </p>
                        <img src={gA} alt="gallery image" />
                    </div>
                    <div className={styles.image3}>
                        <p className="caption2">Clarity PetalS
                            <span className="heading4">$55/Bunch</span>
                        </p>
                        <img src={g2} alt="gallery image" />
                    </div>
                    <div className={styles.image4}>
                        <p className="caption2">River Stone
                            <span className="heading4">$30/Bunch</span>
                        </p>
                        <img src={g3} alt="gallery image" />
                    </div>
                    <div className={styles.image5}>
                        <p className="caption2">Moonlit Meadow
                            <span className="heading4">$120/Bunch</span>
                        </p>
                        <img src={g4} alt="gallery image" />
                    </div>
                    <div className={styles.image6}>
                        <p className="caption2">Ember Leaf
                            <span className="heading4">$55/Bunch</span>
                        </p>
                        <img src={g5} alt="gallery image" />
                    </div>
                    <div className={styles.image7}>
                        <p className="caption2">Skyline Bloom
                            <span className="heading4">$75/Bunch</span>
                        </p>
                        <img src={g6} alt="gallery image" />
                    </div>
                    <div className={styles.image8}>
                        <p className="caption2">Still Waters
                            <span className="heading4"> $250/Bunch</span>
                        </p>
                        <img src={g7} alt="gallery image" />
                    </div>   
                    
                </div>
            </div>
        </div>
        <Services/>
        <WorkWithUs/>
        <Footer />
        </>
    )
}

export default Gallery;