import React, { PureComponent } from 'react'
import dom from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import Gallery from '../src/Gallery'

import {
    Button,
    Container
} from 'semantic-ui-react'

class App extends PureComponent {
    state = {
        active: true
    }

    handleOpen = () => this.setState({ active: true })
    handleClose = () => this.setState({ active: false })

    render() {
        const {
            active
        } = this.state

        return (
            <Container>
                <Button onClick={this.handleOpen} content='Open Gallery' />
                <Gallery 
                    active={active}
                    onClickOutside={this.handleClose}
                    onClose={this.handleClose}
                    keyboardNavigation={false}
                    images={[
                        { src: 'https://picsum.photos/400' },
                        { src: 'https://picsum.photos/200/300' },
                        { src: 'https://picsum.photos/800/1200' },
                        { src: 'https://picsum.photos/1600/1200' },
                        { src: 'https://picsum.photos/800/600' },
                        { src: 'https://picsum.photos/200/2000' },
                        { src: 'https://picsum.photos/2000/500' },
                    ]}
                />
            </Container>
        )
    }
}

dom.render(<App />, document.getElementById('root'))