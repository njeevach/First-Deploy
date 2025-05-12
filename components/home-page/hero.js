import Image from 'next/image';
import classes from './hero.module.css'

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/One.jpg'
                 alt='An image max' 
                 width={300}
                 height={300}
                  unoptimized={true}
                 />
            </div>
            <h1>XYZ</h1>
            <p>One of the Action Character in Marwel</p>
        </section>
    )
}
export default Hero;    