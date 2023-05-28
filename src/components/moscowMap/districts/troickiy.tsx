import {FC} from 'react';

interface MapPartPropsI {
    isActive: number,
    setActiveRegions: React.Dispatch<React.SetStateAction<number[]>>, 
    setRegion: React.Dispatch<React.SetStateAction<string>>
}

const Troickiy:FC<MapPartPropsI> = (props) => {
    const {
        setActiveRegions,
        setRegion,
        isActive
    } = props;

    return (
        <svg onClick={() => {
            setActiveRegions([0,0,0,0,0,0,0,0,0,1,0,0]);
            setRegion('Троицкий АО');
        }}>
            <path d="M290.207 642.319L292.517 649.995L297.855 657.557L304.705 656.008L306.431 649.425L310.441 649.152L310.76 653.161L318.221 659.037L318.46 668.239L313.415 675.732L310.972 682.725L309.724 686.346L315.035 691.289L321.434 694.614L315.592 699.01L316.15 711.582L324.674 708.303L334.472 710.512L353.405 699.329L359.645 695.639L364.531 699.306L370.718 693.384L370.984 689.148L366.124 689.239L368.063 666.075L377.357 664.435L384.154 646.237L393.82 637.331L394.696 629.929L401.069 632.161L410.257 627.583L403.804 624.257L409.062 620.841L410.39 610.09L407.416 608.314L407.336 604.191L400.22 605.307L400.432 609.84L390.607 611.138L392.599 606.902L392.678 601.595L397.272 601.139L398.759 599.727L394.325 598.315L390.926 597.404L393.608 594.375L399.476 595.536L404.017 592.644L404.096 589.068L381.26 588.111L380.941 587.883L368.435 603.804L368.514 611.32L369.125 613.256L360.893 612.892L350.378 613.439L346.793 616.787L344.51 617.219L344.855 608.428L340.314 606.287L342.704 603.28L339.119 589.113L338.827 589.227L334.844 595.832L320.877 597.563L317.903 596.06L310.627 596.197L308.715 599.659L301.333 596.721L298.757 603.075L310.653 609.726L305.21 612.983L299.873 608.678L292.119 608.564L289.224 610.273L289.782 616.126L264.131 616.468L263.786 618.449L271.354 620.955L263.016 627.606L265.91 629.678L264.131 631.181L278.975 639.973L290.207 642.319Z" fill={isActive ? "#30E55B" : "#B5EDC2"}/>
            <path d="M68.9869 612.915L73.3948 613.644L80.4316 608.86L84.7068 607.813L92.0091 610.705L84.6271 619.315L89.6724 624.531L94.0537 621.57L92.0622 626.991L89.3006 636.739L87.2294 650.838L90.1238 653.935L96.6029 666.736L97.8775 677.44L102.843 679.354L102.763 677.372L109.296 678.921L107.756 683.135L117.607 687.257L123.847 683.704L124.006 680.538L126.848 680.72L127.379 682.497L131.123 682.975L128.813 684.319L127.83 689.102L134.309 696.436L132.238 701.515L134.894 705.251L141.824 704.043L143.47 703.747L147.586 689.968L150.507 692.268L156.88 690.696L169.599 674.092L166.466 672.931L166.679 668.694L173.237 667.464L177.353 663.274L186.142 662.955L189.727 666.963L196.021 665.893L196.339 665.847L202.287 667.009L209.855 658.787L210.599 649.061L208.979 646.556L213.387 638.197L216.653 640.11L223.743 633.004L228.363 631.888L229.717 626.717L236.489 624.69L236.409 622.936L237.976 619.406L233.382 619.634L222.123 626.558L221.034 622.071L215.777 617.834L215.458 614.805L202.818 611.594L203.243 604.032L187.311 601.959L187.895 607.061L184.177 610.295L176.875 610.341L176.264 622.23L165.059 618.586L164.448 613.552L159.562 610.068L158.5 606.674L154.782 606.127L154.145 607.608L151.463 607.426L149.896 609.68L145.064 609.475L149.604 570.915L121.351 566.883L124.006 549.505L111.261 545.041L110.969 555.609L41.7958 552.603L40.6539 596.106H31.7319L31.0946 606.993L73.7135 609.635L68.9869 612.915Z" fill={isActive ? "#30E55B" : "#B5EDC2"}/>
            <path d="M228.363 631.888L223.743 633.004L216.653 640.11L213.387 638.197L208.979 646.556L210.599 649.061L209.855 658.787L202.287 667.009L196.339 665.847L196.021 665.893L196.206 671.154L199.738 674.183L200.588 678.83L207.412 674.092L210.678 684.752L206.35 688.236L215.936 696.595L224.353 697.484L223.212 705L225.601 705.683L226.823 701.014L229.213 701.128L230.355 704.157L240.206 700.695L241.029 696.732L249.845 699.055L250.854 702.973L254.306 703.975L256.484 699.01L259.829 700.262L264.583 703.565L269.442 702.449L266.548 699.124L274.461 699.215L275.709 701.424L284.737 699.761L292.092 689.17L297.616 685.617L306.723 684.911L310.972 682.725L313.415 675.732L318.46 668.239L318.221 659.037L310.76 653.161L310.441 649.152L306.431 649.425L304.705 656.008L297.855 657.557L292.517 649.995L290.207 642.319L278.975 639.973L264.131 631.181L262.697 632.411L255.182 627.628L252.368 625.783L247.084 626.262L241.72 628.676L236.701 628.835L236.542 625.966L236.489 624.69L229.717 626.717L228.363 631.888Z" fill={isActive ? "#30E55B" : "#B5EDC2"}/>
            <path d="M263.786 618.449L264.131 616.468L289.782 616.126L289.224 610.273L292.119 608.564L299.873 608.678L305.21 612.983L310.653 609.726L298.757 603.075L301.333 596.721L308.715 599.659L310.627 596.197L317.903 596.06L320.877 597.563L334.844 595.832L338.827 589.227L339.119 589.113L348.44 585.332L353.511 576.564L346.793 572.692L356.804 562.123L365.301 567.407L367.24 563.171L365.301 560.073L358.557 560.506L358.955 557.021L367.24 553.104L377.543 552.329L380.357 551.327L380.225 551.282L381.234 548.753L388.27 548.48L389.12 545.542L385.296 543.674L386.783 539.78L390.315 539.985L395.227 536.34L400.166 535.52L400.751 532.559L399.45 529.052L394.856 525.658L396.475 524.041L400.299 524.998L401.76 523.722L397.485 519.554L401.654 518.392L404.415 512.972L396.98 513.518L393.023 520.192L384.792 521.809L377.489 521.308L375.418 515.477L370.559 518.051L367.293 514.93L360.362 515.523L359.99 520.852L355.715 521.49L354.945 516.821L348.386 518.028L346.368 513.655L337.632 513.04L337.712 510.33L334.127 509.942L331.339 516.57L327.595 515.272L328.046 508.917L325.364 513.336L317.053 513.7L314.477 511.628L314.105 513.427L307.334 513.883L306.06 512.334L309.512 502.449L307.706 499.465L304.307 500.65L304.413 502.517L303.457 504.59L298.332 505.797L294.004 506.936L291.853 505.501L284.073 503.952L284.046 495.001L283.117 493.817L247.694 508.69L247.641 508.439L248.305 512.129L242.569 515.09L241.348 523.221L247.801 526.25L247.084 530.988L243.924 532.696L244.959 552.056L257.147 552.102L254.492 566.428L248.278 568.501L248.916 579.115L255.236 583.761L253.934 592.621L236.515 595.673L223.955 594.739L222.76 598.93L263.016 627.606L271.354 620.955L263.786 618.449Z" fill={isActive ? "#30E55B" : "#B5EDC2"}/>
            <path d="M367.24 553.104L358.955 557.021L358.557 560.506L365.301 560.073L367.24 563.171L365.301 567.407L356.804 562.123L346.793 572.692L353.511 576.564L348.44 585.332L339.119 589.113L342.704 603.28L340.314 606.287L344.855 608.428L344.51 617.219L346.793 616.787L350.378 613.439L360.893 612.892L369.125 613.256L368.514 611.32L368.435 603.804L380.941 587.883L378.631 586.175L384.579 575.265L384.208 568.797L386.385 566.36L380.517 562.351L380.065 555.723L382.163 555.336L383.092 552.124L380.357 551.327L377.543 552.329L367.24 553.104Z" fill={isActive ? "#30E55B" : "#B5EDC2"}/>
            <path d="M438.643 745.109L424.649 741.784L425.897 734.837L430.942 735.725L431.288 731.421L428.792 727.845L432.509 724.109L428.765 723.563L423.826 719.873L426.136 716.206L417.931 716.138L412.726 715.022L414.506 709.942L415.09 704.294L417.878 700.855L414.665 699.944L398.52 710.466L394.245 710.876L392.227 709.373L387.978 715.067L380.543 715.568L380.517 714.019L373.825 713.2L375.392 708.918L361.956 711.081L357.255 716.479L353.14 714.088L353.405 699.329L334.472 710.512L334.738 710.557L339.464 713.45L343.527 734.404L339.438 738.869L330.303 741.306L328.71 750.712L325.417 749.323L326.294 761.121L321.408 762.237L318.062 767.954L315.46 767.43L315.38 778.067L322.125 776.313L325.099 778.841L327.648 776.609L329.878 781.415L333.915 810.045L338.96 816.126L351.467 825.191L353.246 834.348L359.114 832.822L359.752 841.34L355.689 843.8L355.981 851.339L371.063 855.735L372.179 846.943L383.464 846.328L383.862 839.108L399.37 835.6L434.315 823.324L442.812 785.082L446.662 783.852L446.609 780.709L440.316 779.547L441.803 777.702L441.298 775.311L436.758 775.402L436.917 774.286L435.457 773.58L435.961 770.733L428.845 771.393L425.446 770.05L426.242 767.43L428.738 764.196L425.021 758.98L426.827 756.088L430.757 756.771L432.27 758.593L440.635 762.511L443.502 759.732L452.451 759.664L455.876 754.63L445.361 750.895L438.643 745.109Z" fill={isActive ? "#30E55B" : "#B5EDC2"}/>
            <path d="M329.878 781.415L327.648 776.609L325.099 778.841L322.125 776.313L315.38 778.067L315.46 767.43L318.062 767.954L321.408 762.237L326.294 761.121L325.417 749.323L328.71 750.712L330.303 741.306L339.438 738.869L343.527 734.404L339.464 713.45L334.738 710.557L334.472 710.512L324.674 708.303L316.15 711.582L315.592 699.01L321.434 694.614L315.035 691.289L309.724 686.346L310.972 682.725L306.723 684.911L297.616 685.617L292.092 689.17L284.737 699.761L275.709 701.424L274.461 699.215L266.548 699.124L269.442 702.449L264.583 703.565L259.829 700.262L256.484 699.01L254.306 703.975L250.854 702.973L249.845 699.055L241.029 696.732L240.206 700.695L230.355 704.157L229.213 701.128L226.823 701.014L225.601 705.683L223.212 705L224.353 697.484L215.936 696.595L206.35 688.236L210.678 684.752L207.412 674.092L200.588 678.83L199.738 674.183L196.206 671.154L196.021 665.893L189.727 666.963L186.142 662.955L177.353 663.274L173.237 667.464L166.679 668.694L166.466 672.931L169.599 674.092L156.88 690.696L150.507 692.268L147.586 689.968L143.47 703.747L141.824 704.043L139.089 708.257L139.275 713.655L165.112 726.865L156.323 734.564L152.632 735.293L147.294 756.771L150.64 760.483L155.021 759.504L156.084 764.925L159.031 763.946L160.651 771.576L174.432 766.109L203.934 782.668L228.788 791.801L226.451 797.062L234.869 798.702L236.17 793.897L237.577 798.907L247.429 802.324L264.344 817.334L261.901 822.504L266.255 821.821L266.548 824.781L272.363 823.347L278.842 826.421L295.013 833.004L294.987 828.266L297.669 825.328L303.696 822.299L312.087 827.492L312.247 831.523L320.346 835.509L322.151 833.368L325.497 833.847L337.951 833.482L343.076 823.734L337.367 818.358L338.96 816.126L333.915 810.045L329.878 781.415Z" fill={isActive ? "#30E55B" : "#B5EDC2"}/>
            <path d="M483.758 671.086L488.803 669.173L482.138 665.278L485.856 660.085L484.501 652.637L480.147 651.68L477.305 654.095L473.508 651.931L472.871 649.334L468.49 650.45L464.029 651.043L463.577 644.369L461.028 645.166L458.744 642.456L462.462 639.222L458.266 635.828L454.044 639.313L454.655 634.53L428.446 632.389L435.191 626.512L436.492 620.682L433.465 621.183L421.436 620.272L420.533 618.95L425.738 615.739L429.508 614.669L430.199 611.981L418.223 611.548L415.488 609.589L412.62 611.411L410.39 610.09L409.062 620.841L403.804 624.257L410.257 627.583L401.069 632.161L394.696 629.929L393.82 637.331L384.154 646.237L377.357 664.435L368.063 666.075L366.124 689.239L370.984 689.148L370.718 693.384L364.531 699.306L359.645 695.639L353.405 699.329L353.14 714.088L357.255 716.479L361.956 711.081L375.392 708.918L373.825 713.2L380.517 714.019L380.543 715.568L387.978 715.067L392.227 709.373L394.245 710.876L398.52 710.466L414.665 699.944L417.878 700.855L415.09 704.294L414.506 709.942L412.726 715.022L417.931 716.138L426.136 716.206L423.826 719.873L428.765 723.563L432.509 724.109L428.792 727.845L431.288 731.421L430.942 735.725L425.897 734.837L424.649 741.784L438.643 745.109L445.361 750.895L455.876 754.63L455.903 754.584L453.991 748.116L448.123 740.896L439.918 734.701L447.167 731.307L452.106 726.296L452.239 719.987L467.852 716.252L455.213 705.319L462.223 696.846L469.658 694.568L472.446 689.671L475.128 690.879L475.34 696.641L479.828 702.267L485.511 697.279L483.466 691.63L486.971 687.986L483.307 679.741L487.741 677.463L483.758 671.086Z" fill={isActive ? "#30E55B" : "#B5EDC2"}/>
            <path d="M272.363 823.347L266.548 824.781L266.255 821.821L261.901 822.504L264.344 817.334L247.429 802.324L237.577 798.907L236.17 793.897L234.869 798.702L226.451 797.062L228.788 791.801L203.934 782.668L174.432 766.109L160.651 771.576L159.031 763.946L156.084 764.925L155.021 759.504L150.64 760.483L147.294 756.771L148.648 760.893L146.763 769.344L149.233 770.505L145.674 774.65L154.915 782.053L163.067 782.463L169.175 783.442L168.166 787.61L173.689 788.157L173.848 790.275L146.71 795.468L143.656 805.399L141.877 804.852L138.717 806.651L130.22 804.146L121.564 806.856L123.369 811.321L118.43 821.023L121.67 824.212L119.838 827.492L115.164 825.123L110.544 831.683L116.12 833.163L115.323 840.429L116.332 855.666L123.98 859.926L122.785 864.595L129.53 874.958L138.266 895.548L144.187 892.792L147.135 895.571L149.923 894.181L154.331 894.66L156.508 893.612L160.81 893.521L161.925 892.314L160.332 899.511L162.058 898.577L162.802 914.384L157.597 917.755L158.633 921.855L160.73 922.401L163.412 921.012L164.953 922.698L166.015 926.683L170.927 929.029L172.52 933.926L179.292 934.154L193.126 934.314L193.657 929.53L225.389 928.255L225.203 922.902L247.11 920.42L247.933 912.311L254.333 911.4L256.165 915.728L260.706 910.854L267.238 912.516L266.362 889.626L271.062 882.406L271.726 878.967L265.087 880.083L267.291 863.091L267.955 862.59L265.061 858.923L265.645 844.278L270.663 845.645L279.639 839.336L285.295 840.725L295.013 833.004L278.842 826.421L272.363 823.347Z" fill={isActive ? "#30E55B" : "#B5EDC2"}/>
            <path d="M152.632 735.293L147.294 756.771L133.114 746.043L130.486 748.435L121.086 740.053L117.819 731.922L113.597 727.549L102.87 716.593L102.392 714.543L95.7266 713.336L63.2247 686.141L67.5796 682.155L59.1089 674.229L68.5089 665.824L50.1071 651.452L55.3913 645.736L45.3274 642.57L39.0342 628.562L30.1386 623.141L31.068 606.993L73.6604 609.635L68.9604 612.915L73.3417 613.644L80.4051 608.86L84.6802 607.813L91.9825 610.683L84.6006 619.315L89.6458 624.531L94.0272 621.57L92.0357 626.991L89.3006 636.739L87.2028 650.838L90.0972 653.935L96.5764 666.713L97.8509 677.44L102.843 679.354L102.763 677.372L109.296 678.898L107.756 683.112L117.607 687.234L123.847 683.681L124.006 680.515L126.848 680.72L127.379 682.497L131.123 682.975L128.839 684.319L127.83 689.102L134.336 696.436L132.238 701.515L134.894 705.273L141.824 704.066L139.089 708.28L139.301 713.678L165.138 726.865L156.349 734.587L152.632 735.293ZM97.134 737.138L95.647 741.26L96.7357 742.467L95.9125 748.64L93.3633 751.897L91.6373 751.327L89.7255 754.243L93.3633 757.431L96.417 755.313L97.1605 752.398L98.4086 751.623L101.144 752.534L105.366 744.654L98.6741 742.741L100.745 738.276L97.134 737.138Z" fill={isActive ? "#30E55B" : "#B5EDC2"}/>

        </svg>
    )
}

export default Troickiy;