import {FC} from 'react';

interface MapPartPropsI {
    isActive: number,
    setActiveRegions: React.Dispatch<React.SetStateAction<number[]>>, 
    setRegion: React.Dispatch<React.SetStateAction<string>>
}

const SE:FC<MapPartPropsI> = (props) => {
    const {
        setActiveRegions,
        setRegion,
        isActive
    } = props;

    return (
        <svg onClick={() => {
            setActiveRegions([0,0,0,0,0,0,1,0,0,0,0,0]);
            setRegion('Юго-Восточный АО');
        }}>
            <path d="M642.975 314.201V313.382L650.171 314.088L652.561 320.67L656.146 324.178L662.811 324.952L667.909 312.106L667.697 311.992L658.721 308.143C658.721 308.143 656.066 306.64 655.269 305.546C654.499 304.43 654.127 303.041 654.127 301.105C654.127 299.192 656.252 293.202 656.252 293.202L656.57 291.106L651.446 281.472L640.24 290.195L636.947 287.462L634.929 288.737L632.38 293.384L632.274 295.297L631.424 296.846L629.193 298.395H622.953L621.997 300.399L623.591 305.228L621.944 306.981L621.971 307.004L629.247 309.191L638.593 315.113L639.735 316.479L640.691 318.073L640.612 314.156L642.975 314.201Z" fill={isActive ? "#28B9FF" : "#92DAFD"}/>
<path d="M684.691 326.82L684.532 327.662L684.186 328.528L683.709 329.006L682.275 329.644L680.734 330.236L667.511 333.789L669.794 334.814L675.902 348.252L693.268 341.465L697.782 349.619L707.315 351.19L707.368 350.872L710.422 336.522L696.083 329.371L689.019 324.086L684.824 325.157L684.691 326.82Z" fill={isActive ? "#28B9FF" : "#92DAFD"}/>
<path d="M633.415 354.652L627.839 343.925L642.019 337.547L627.68 330.623L627.627 330.828L626.511 329.94L620.935 332.764L617.563 326.25L614.323 327.412L616.74 332.172V332.149L617.35 334.04L617.43 340.508L620.351 354.06L619.926 359.39L623.378 360.21L625.821 362.169L631.689 362.738L631.796 362.761L635.726 355.563L633.415 354.652Z" fill={isActive ? "#28B9FF" : "#92DAFD"}/>
<path d="M642.019 337.547L642.125 337.593L644.568 339.028L653.039 335.543L654.367 337.342L667.511 333.789L680.734 330.236L682.275 329.644L683.709 329.006L684.186 328.528L684.532 327.662L684.691 326.82L684.824 325.157L689.019 324.086L688.966 324.041L685.408 321.49L676.22 319.303L669.024 312.744L667.909 312.106L662.811 324.952L656.146 324.178L652.561 320.67L650.171 314.088L642.975 313.382V314.201L640.612 314.11L640.691 318.051L641.435 319.281L641.807 321.786L637.85 329.484L637 329.166L630.999 324.451L631.238 327.64L630.043 327.685L629.539 329.667L628.052 329.12L627.68 330.623L642.019 337.547Z" fill={isActive ? "#28B9FF" : "#92DAFD"}/>
<path d="M693.268 341.465L675.902 348.252L674.68 348.731L673.538 351.327L681.186 368.888L681.239 368.956L682.115 369.958C682.115 369.958 683.602 369.138 683.602 369.207C683.602 369.275 684.558 371.393 684.558 371.393L687.346 373.534L690.798 375.151L692.259 374.491L699.428 376.654L701.287 376.085L703.571 378.454L706.093 376.677L712.838 378.613L714.909 371.393L712.44 370.619L711.67 370.55L710.501 370.664L709.227 370.846L707.766 371.256L706.545 371.78L705.005 372.714L702.509 370.938L702.641 369.207H704.314L707.235 351.168L697.702 349.596L693.268 341.465Z" fill={isActive ? "#28B9FF" : "#92DAFD"}/>
<path d="M673.538 351.35L674.68 348.731L675.902 348.252L669.794 334.814L667.511 333.789L654.367 337.342L661.058 346.385L663.05 353.104L662.864 358.023L664.006 364.674L665.174 368.273L668.626 368.045L671.414 369.89L673.087 369.503L674.786 369.434L675.928 369.594L677.123 369.89L679.911 371.074L681.239 368.956L681.186 368.888L673.538 351.35Z" fill={isActive ? "#28B9FF" : "#92DAFD"}/>
<path d="M755.457 366.337L749.562 361.098L752.058 358.934L748.739 356.065L736.604 349.55L736.577 349.619L710.475 336.545L710.422 336.522L707.368 350.872L707.315 351.19L704.367 369.229H702.721L702.588 370.983L705.084 372.737L706.598 371.803L707.819 371.279L709.28 370.892L710.554 370.71L711.723 370.596L712.466 370.664L714.936 371.439L712.838 378.659V378.727L712.466 380.504L718.122 384.33L724.097 379.433L728.186 383.692L735.807 383.784L733.497 373.944L750.545 385.492L752.43 383.26L755.855 371.689L752.483 368.842L755.457 366.337Z" fill={isActive ? "#28B9FF" : "#92DAFD"}/>
<path d="M724.097 379.433L718.122 384.33L712.466 380.504L712.811 378.704L712.838 378.636L706.093 376.7L703.571 378.477L701.287 376.108L699.428 376.677L692.259 374.514L690.798 375.174L687.346 373.557L684.558 371.416C684.558 371.416 683.602 369.298 683.602 369.229C683.602 369.161 682.115 369.981 682.115 369.981L681.239 368.979L679.911 371.097L677.123 369.913L675.928 369.617L674.786 369.457L673.113 369.525L671.441 369.913L668.652 368.068L665.227 368.296L666.687 372.737L662.041 387.473L658.721 395.764L655.349 399.727L661.031 404.624L667.219 400.342L668.732 400.388L677.814 393.782L680.681 393.281L683.204 392.757C683.204 392.757 684.718 392.256 684.85 392.234C684.983 392.211 685.992 391.596 685.992 391.596L687.001 392.006L688.249 393.031H694.091L700.703 397.814L703.385 402.483L706.598 402.984L706.757 403.007L740.321 403.599L740.427 398.634L735.807 383.784L728.16 383.715L724.097 379.433Z" fill={isActive ? "#28B9FF" : "#92DAFD"}/>
<path d="M706.598 402.961L701.234 413.256C701.446 413.78 701.473 414.304 701.473 414.304L701.659 415.967L700.676 422.23L700.862 425.077L701.632 429.678L703.969 437.285L707.235 440.52L723.539 424.69L725.292 423.984L726.354 423.688L727.044 422.777L726.859 421.433L734.957 413.165L739.02 407.016L740.693 406.309L741.357 405.08L740.268 404.055V403.553L706.704 402.961H706.598Z" fill={isActive ? "#28B9FF" : "#92DAFD"}/>
<path d="M703.358 402.46L700.676 397.791L694.064 393.008H688.223L686.975 391.983L685.966 391.573C685.966 391.573 684.957 392.165 684.824 392.211C684.691 392.256 683.177 392.735 683.177 392.735L680.655 393.259L677.787 393.76L668.706 400.365L667.192 400.319L661.005 404.601L655.349 399.727L655.296 399.795L643.718 412.459L639.496 416.513L638.116 418.335L638.195 418.381C638.195 418.381 647.648 422.116 651.074 422.39C654.499 422.663 659.89 421.091 659.89 421.091L663.687 421.046L674.308 421.752C674.308 421.752 695.472 413.142 697.543 412.345C699.614 411.548 700.57 412.209 700.995 412.824C701.101 412.96 701.181 413.12 701.234 413.256L706.598 402.961L703.358 402.46Z" fill={isActive ? "#28B9FF" : "#92DAFD"}/>
<path d="M643.692 412.459L655.269 399.795L655.322 399.727L658.642 395.741L661.961 387.451L666.608 372.714L665.147 368.273L663.979 364.674L662.811 358.001L663.023 353.081L661.031 346.362L654.34 337.342L652.986 335.543L644.515 339.028L642.072 337.593L641.966 337.547L627.786 343.925L633.362 354.652L635.699 355.563L631.743 362.761L633.708 363.125C638.036 363.922 642.152 365.585 645.869 367.635C647.834 368.728 649.507 370.391 650.304 372.281C652.402 377.133 650.224 381.734 644.966 384.102C639.603 386.517 634.292 388.863 628.848 391.186L626.166 392.894L624.175 395.195L622.555 407.835L625.874 410.455L638.036 418.335L639.417 416.513L643.692 412.459Z" fill={isActive ? "#28B9FF" : "#92DAFD"}/>
<path d="M822.957 354.22L827.683 354.197L823.833 349.733L828.56 348.116L821.921 346.407L820.248 343.56L812.946 343.97L813.079 340.85L810.742 338.367L810.344 337.752L805.378 342.718L799.616 342.399L798.156 343.788L797.97 345.496L796.987 348.867L795.182 350.78L792.924 351.76L788.384 352.511L783.684 352.853L783.471 352.648L786.286 359.504L788.171 359.367L791.119 359.344L792.871 362.465L792.473 366.428L798.235 364.264L795.314 370.254L791.57 371.735L790.375 374.331L788.596 376.723L788.145 379.547L792.261 380.39L793.084 385.492L814.247 386.198L816.371 387.314L825.108 388.293L822.824 385.788L822.983 383.123L824.842 380.936L823.222 378.477L823.913 373.466L820.806 370.3L810.423 365.562C810.423 365.562 816.796 363.763 819.08 363.285L822.479 363.33L823.674 363.262L824.656 362.829L824.444 362.169L823.621 361.144L823.966 359.959L823.249 359.481L822.638 359.208L820.992 357.591L816.717 357.203L812.946 352.967L818.761 353.855L822.957 354.22Z" fill={isActive ? "#28B9FF" : "#92DAFD"}/>

        </svg>
    )
}

export default SE;