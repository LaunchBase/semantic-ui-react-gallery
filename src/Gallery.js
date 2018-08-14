import React, { PureComponent, Fragment } from 'react'
import style from './style.less'

import {
    Dimmer,
    Icon,
    Image,
    Button
} from 'semantic-ui-react'

class Gallery extends PureComponent {    
    state = {
        activeImage: 0
    }

    handleImageClick = index => this.setState({ activeImage: index })

    handleClickLeft = () => {
        this.setState(prevState => {
            if (prevState.activeImage > 0) {
                return { activeImage: prevState.activeImage - 1}
            }
        })
    }
    
    handleClickRight = () => {
        this.setState(prevState => {
            if (prevState.activeImage < this.props.images.length - 1) {
                return { activeImage: prevState.activeImage + 1}
            }
        })
    }

    render() {
        const {
            active,
            images,
            onClickOutside
        } = this.props

        let activeImage = this.state.activeImage

        if (images.length >= 1) {
            return (
                <Fragment>
                    <Dimmer
                        active={active}
                        page
                        onClickOutside={onClickOutside}
                    >
                        <div className={style.inner}>
                            
                            <div className={style.leftGutter}>
                                    <Button
                                        onClick={this.handleClickLeft}
                                        basic
                                        circular
                                        icon
                                        inverted
                                        size='huge'
                                        disabled={activeImage === 0}
                                    >
                                    <Icon name='arrow left' />
                                </Button>
                            </div>
                            
                            <div className={style.activeImage}>
                                <Image src={images[activeImage].src} />
                            </div>

                            <div className={style.gutter}>
                                <Button
                                    onClick={this.handleClickRight}
                                    basic
                                    circular
                                    icon
                                    inverted
                                    size='huge'
                                    disabled={activeImage === images.length - 1}
                                >
                                    <Icon name='arrow right' />
                                </Button>
                            </div>

                            <div className={style.carousel}>
                                {
                                    images.map((image, index) => {
                                        return <Image
                                            key={image.key}
                                            src={image.src}
                                            className={index === activeImage ? style.carousel__activeImage : undefined }
                                            onClick={() => { this.handleImageClick(index) }}
                                        />
                                    }) 
                                }
                            </div>
                        </div>
                    </Dimmer>
                </Fragment>
            )
        }   

        return null        
    }
}

export default Gallery