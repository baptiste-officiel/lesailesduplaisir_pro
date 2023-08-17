import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import styles from './Slider.module.scss'
import { slides } from "../../data/PlaneImg";


function Slider() {
  console.log("🚀 ~ file: Slider.tsx:4 ~ styles:", styles)

  return (
    <div className={styles.slider}>
<Splide options={{
        perPage:2,
        pagination: false,
        drag: 'free',
        gap: '2rem',
        breakpoints: {
          768: {
            perPage: 1
          }
        }
      }}>
        {slides && slides.map((slide) =>
            <SplideSlide key={slide.id}>
                    <img src={slide.url} alt={slide.alt} />
            </SplideSlide>
        )}
    </Splide>
    </div>
  )
}

export default Slider
