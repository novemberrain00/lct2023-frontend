import {FC} from 'react';

interface MapPartPropsI {
    isActive: number,
    setActiveRegions: React.Dispatch<React.SetStateAction<number[]>>, 
    setRegion: React.Dispatch<React.SetStateAction<string>>
}

const North:FC<MapPartPropsI> = (props) => {
    const {
        setActiveRegions,
        setRegion,
        isActive
    } = props;

    return (
        <svg onClick={() => {
            setActiveRegions([0,0,0,1,0,0,0,0,0,0,0,0]);
            setRegion('Северный АО')
        }}>
            <path d="M512.569 161.872L522.659 177.087L525.076 179.046L528.289 176.973L527.572 175.766L536.414 173.557L536.335 173.215L533.998 167.065L534.051 164.036L539.972 163.922L539.654 163.08L539.388 162.783L539.654 161.713L539.84 159.595V153.103L540.45 152.397L540.397 152.375L536.52 150.507L531.741 147.341L530.387 143.469L523.376 145.177L520.11 146.886L502.425 159.025L502.399 159.048L509.037 164.788L512.569 161.872Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
<path d="M550.541 203.69L549.824 203.644L547.832 203.553L545.841 203.69L542.044 205.034L545.894 208.564L530.387 217.857L529.829 218.54L530.387 219.064L531.157 219.383L531.024 220.021L530.891 221.273L526.271 223.141L527.014 229.131L526.775 233.163L528.289 234.484L531.157 239.085L532.166 242.752L538.592 247.922L538.353 248.15L539.017 248.674L540.318 249.402L541.964 250.063L543.292 250.245L545.204 250.222L558.826 247.079H559.888L564.694 245.849L560.525 242.729L559.065 235.941L556.834 231.751L556.569 221.228L558.64 215.374L559.543 213.985L557.073 206.537L556.542 204.624L554.391 204.237L550.541 203.69Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
<path d="M539.84 159.595L539.654 161.713L539.388 162.783L539.654 163.08L539.972 163.922L534.051 164.036L533.998 167.065L536.335 173.215L536.414 173.557L537.317 177.201L542.176 175.288L543.849 173.488L544.407 173.967V177.474L550.275 188.703L550.913 191.095L547.939 190.867L548.151 192.917H550.913L550.275 198.77L555.4 198.246L555.639 190.707L551.338 173.42L550.833 167.453L550.036 159.959L549.346 158.593L548.337 157.408L544.566 154.857L543.318 154.106L540.45 152.397L539.84 153.103V159.595Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
<path d="M550.913 192.917H548.151L547.939 190.867L550.913 191.095L550.275 188.703L544.407 177.474V173.967L543.849 173.488L542.176 175.288L537.317 177.201L536.414 173.557L527.572 175.766L528.289 176.973L525.076 179.046L545.761 195.65L549.824 203.644L550.541 203.69L554.391 204.237L556.542 204.624L556.064 202.938L555.4 198.406V198.246L550.275 198.77L550.913 192.917Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
<path d="M545.204 250.222L543.292 250.245L541.964 250.063L540.318 249.402L539.017 248.674L538.353 248.15L537.928 248.605L548.018 262.089L552.532 264.526L555.294 264.389L565.252 263.888L562.357 260.927L562.012 254.117L559.888 247.079H558.826L545.204 250.222Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
<path d="M524.12 239.54H526.51L527.89 239.7L529.032 240.223L532.166 242.752L531.157 239.085L528.289 234.484L526.775 233.163L527.014 229.131L526.271 223.141L530.891 221.273L531.024 220.021L531.157 219.383L530.387 219.064L529.829 218.54L530.387 217.857L545.894 208.564L542.044 205.034L520.031 212.778L519.34 212.186L516.26 212.368L514.693 215.967L508.4 216.809L510.816 220.977L509.781 222.071L514.348 226.193L517.933 233.504L516.738 235.782L520.031 237.149L518.411 239.449L518.65 239.426L524.12 239.54Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
<path d="M548.018 262.089L537.928 248.605L538.353 248.15L538.592 247.922L532.166 242.752L529.032 240.223L527.89 239.7L526.51 239.54H524.12L518.65 239.426L518.411 239.449L515.277 243.936L511.985 249.539L518.544 251.931L526.271 254.755L534.157 260.085L550.01 270.767L555.294 264.389L552.532 264.526L548.018 262.089Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
<path d="M555.294 264.389L550.01 270.767L534.157 260.085L530.679 263.683L534.343 266.325L538.379 267.965L541.911 271.382L536.281 275.869L539.707 279.445L541.911 280.629V283.134L557.657 281.016L561.694 277.987L562.862 276.142L565.252 263.911V263.888L555.294 264.389Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
<path d="M517.534 256.167L518.544 251.931L511.985 249.539L515.277 243.936L518.411 239.449L515.171 239.996L495.415 239.472L495.601 242.364L501.071 252.136L506.78 262.727L506.966 264.367L507.152 264.412L507.178 264.549L517.083 262.271L517.534 256.167Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
<path d="M539.707 279.445L536.281 275.869L541.911 271.382L538.379 267.965L534.343 266.325L530.679 263.683L534.157 260.085L526.271 254.755L518.544 251.931L517.534 256.167L517.083 262.271L507.178 264.549L509.356 278.625L514.906 289.808L517.402 293.566L519.606 295.844L519.579 295.821L520.031 295.593L521.172 297.575L526.35 294.409L531.396 287.029L537.609 283.681L541.858 283.18V283.134L541.911 283.134V280.629L539.707 279.445Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
<path d="M518.411 239.449L520.031 237.149L516.738 235.782L517.933 233.504L514.348 226.193L509.781 222.071L510.816 220.977L508.4 216.809L508.32 216.832L500.62 214.327H491.618L490.609 212.368L485.511 214.122L490.078 222.845L489.998 224.872L487.476 225.624L489.387 227.788L496.451 227.423L498.389 226.968L499.956 229.951L497.593 231.91L495.229 236.625L495.415 239.404V239.472L515.171 239.996L518.411 239.449Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
<path d="M491.618 214.327H500.62L508.32 216.832L508.4 216.809L514.693 215.967L516.26 212.368L519.34 212.186L520.031 212.778L542.044 205.034L533.148 196.789L514.853 184.672L508.055 190.343L512.303 195.126L502.266 200.479L498.681 202.369L488.405 202.984L480.97 205.444L481.129 205.808L484.475 212.345L484.581 212.368L485.511 214.122L490.609 212.368L491.618 214.327Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
<path d="M514.853 184.672L533.148 196.789L542.044 205.034L545.841 203.69L547.832 203.553L549.824 203.644L545.761 195.65L525.076 179.046L522.659 177.087L512.569 161.872L509.037 164.788L502.399 159.048L498.469 161.827L494.273 163.763L493.769 162.556L492.202 163.717L492.176 164.697L487.422 166.496L514.853 184.672Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
<path d="M482.298 173.557L495.999 194.192L497.168 193.759L502.266 200.479L512.303 195.126L508.055 190.343L514.853 184.672L487.422 166.496L486.626 166.815L482.669 168.159L477.173 168.865L479.775 170.983L482.298 173.557Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
<path d="M498.681 202.369L502.266 200.479L497.168 193.759L495.999 194.192L482.298 173.557L479.775 170.983L477.173 168.865L476.296 168.979L474.331 169.138L470.162 169.457L465.117 168.432L464.055 171.325L461.612 172.737L462.913 175.333L469.817 180.481L473.03 181.916L473.296 186.63L478.421 199.955L478.394 199.864L478.421 199.886L480.97 205.444L488.405 202.984L498.681 202.369Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
<path d="M449.689 97.8022L449.105 95.6612L447.087 95.5701L446.476 94.0441L443.29 95.6612L443.21 94.6818L441.272 95.2513L441.644 96.1851L441.033 97.5972L431.075 100.239L430.146 99.0094L430.969 96.6862L428.845 96.3673L427.995 95.3651L424.224 95.7751L424.463 97.5972L422.684 97.5061L418.887 94.7502L419.843 93.133L407.973 92.6092L407.15 93.0192L407.628 94.0441L406.566 94.2491L404.309 97.8933L401.707 95.8662L400.644 96.4812L398.972 94.1352L399.45 93.338L398.972 92.3131H396.369L396.13 91.6981L392.599 94.864L393.05 95.9801L392.36 97.3922L397.803 104.817L404.548 110.306L402.291 112.539L397.431 109.897L393.183 113.245L388.084 115.591L392.36 116.502L397.67 123.813L397.803 126.159L400.751 127.07L402.052 125.84L401.468 123.312L406.433 119.941L420.533 129.393L416.285 130.828L413.072 134.677L411.425 135.497L414.373 139.164L415.461 142.467L420.48 138.595L420.719 137.388L424.145 135.657L423.773 137.684L428.181 137.274L428.34 138.732L435.696 134.381L432.509 130.919L432.031 127.662L436.067 118.324L441.272 120.67L442.493 120.169L443.184 118.939L442.467 118.734L440.688 112.744L439.015 111.423L442.706 103.792L449.344 103.587L450.167 100.945L450.035 99.4193L450.884 98.5083L449.689 97.8022Z" fill={isActive ? "#7463FF" : "#A297FF"}/>
        </svg>
    )
}

export default North;