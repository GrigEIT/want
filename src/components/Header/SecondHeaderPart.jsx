import React from 'react'
import Icon from './Icon'

export default function SecondHeaderPart() {
  return (
    <div className='flex items-center justify-between'>
        <div className="left_part flex justify-center items-center gap-5">
            <Icon value={'https://static-00.iconduck.com/assets.00/message-icon-2043x2048-z7d1f8at.png'} type={'icon'}/>
            <Icon value={'data:image/png;base64,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'} type={'icon'}/>
        </div>
        <img width={120} src="https://want.am/design/themes/wantam/media/images/logo2.png?1704906758" alt="logo" />
        <div className="left_part flex justify-center items-center gap-5">
            <Icon value={'https://cdn-icons-png.flaticon.com/512/32/32339.png'} type={'icon'}/>
            <Icon value={'https://cdn-icons-png.flaticon.com/512/3721/3721818.png'} type={'icon'}/>
        </div>
        <div className="right_part"></div>
    </div>
  )
}
