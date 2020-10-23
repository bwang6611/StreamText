import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch, getState } from 'react-redux'
import { If } from 'react-control-statements'
import { bot_size,  invertColors, textSize} from '../../redux/actions'


export default function StreamTextRender() {
    const bot_mode = useSelector((state)=>state.botsize);
    const invert_colors = useSelector((state)=>state.invertColors);
    const text_size = useSelector((state)=>state.textSize);


    var bcgColor = invert_colors ? 'white' : 'black';
    var sizeInt = 3 * (text_size) + 45;
    return (
        <div className = "streamTextWrapper">
          <If condition = { bcgColor == 'white'}>
            <If condition = { bot_mode == 0 }>
              <iframe id = "StreamTextDemo" src = {"https://www.streamtext.net/player?event=IHaveADream&chat=false&controls=false&header=false&footer=false&fgc=000000&fs=" + sizeInt}
                frameborder = "0"
                width = "100%"
                height = "900vh"
              >
              </iframe>
            </If>
            <If condition = { bot_mode == 1}>
              <iframe id = "StreamTextDemo" src = {"https://www.streamtext.net/player?event=IHaveADream&chat=false&controls=false&header=false&footer=false&fgc=000000&fs=" + sizeInt}
                frameborder = "0"
                width = "100%"
                height = "600vh"
              >
              </iframe>
            </If>
            <If condition = { bot_mode == 2}>
              <iframe id = "StreamTextDemo" src = {"https://www.streamtext.net/player?event=IHaveADream&chat=false&controls=false&header=false&footer=false&fgc=000000&fs=" + sizeInt}
                frameborder = "0"
                width = "100%"
                height = "300vh"
                >
              </iframe>
            </If>
          </If>

          <If condition = { bcgColor == 'black'}>
            <If condition = { bot_mode == 0 }>
              <iframe id = "StreamTextDemo" src = {"https://www.streamtext.net/player?event=IHaveADream&chat=false&controls=false&header=false&footer=false&fgc=FFFFFF&fs=" + sizeInt}
                frameborder = "0"
                width = "100%"
                height = "900vh"
              >
              </iframe>
            </If>
            <If condition = { bot_mode == 1}>
              <iframe id = "StreamTextDemo" src = {"https://www.streamtext.net/player?event=IHaveADream&chat=false&controls=false&header=false&footer=false&fgc=FFFFFF&fs=" + sizeInt}
                frameborder = "0"
                width = "100%"
                height = "600vh"
              >
              </iframe>
            </If>
            <If condition = { bot_mode == 2}>
              <iframe id = "StreamTextDemo" src = {"https://www.streamtext.net/player?event=IHaveADream&chat=false&controls=false&header=false&footer=false&fgc=FFFFFF&fs=" + sizeInt}
                frameborder = "0"
                width = "100%"
                height = "300vh"
                >
              </iframe>
            </If>
          </If>
        </div>

    );

}
