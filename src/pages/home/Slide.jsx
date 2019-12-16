import React from "react";
import { Carousel, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import {SlideWrap} from "./styledHome";
import {get} from "utils/http"
class Slide extends React.Component {
    state = {
        data: [],
        imgHeight: 176,
        slideIndex: 2,
    }
 async  componentDidMount() {
       let result =  await get({
           url:"/ajax/swipper"
       })     
    this.setState({
        data:result.data.data
    })
        
    }
    componentDidUpdate() {
        // After the new child element is rendered, change the slideIndex
        // https://github.com/FormidableLabs/nuka-carousel/issues/327
        if (this.state.slideIndex !== this.state.data.length - 1) {
            /* eslint react/no-did-update-set-state: 0 */
            this.setState({ slideIndex: this.state.data.length - 1 });
        }
    }
    render() {
        return (
            <SlideWrap>
            <WingBlank>             
                <Carousel
                    autoplay={true}
                    infinite
                    selectedIndex={this.state.slideIndex}
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map((val, index) => (
  
                        <a
                            key={val.id}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                           
                            <img
                                src={val.url}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            
                        </a>
                            
                    ))}
                </Carousel>
            </WingBlank>
            </SlideWrap>
        );
    }
}

export default Slide