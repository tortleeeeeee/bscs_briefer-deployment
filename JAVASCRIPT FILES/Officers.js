
var aofficers=1;
function movePictureOfficers(){
    
    if (aofficers==1) {
        document.getElementById("a").setAttribute("class", "ref-officers");
        document.getElementById("o1").setAttribute("class", "ref-officers");
        document.getElementById("o2").setAttribute("class", "ref-officers");
        document.getElementById("o3").setAttribute("class", "ref-officers");
        document.getElementById("o4").setAttribute("class", "ref-officers");
        document.getElementById("o5").setAttribute("class", "ref-officers");
        document.getElementById("o6").setAttribute("class", "ref-officers");
        document.getElementById("o7").setAttribute("class", "ref-officers");
        document.getElementById("initialLayout-officers").style.background = "transparent";
        document.getElementById("initialLayout-officers").setAttribute("class", "newLayout-officers");
        document.getElementById("deets-officers").setAttribute("class", "rightpanel-officers");
        document.getElementById("deets-officers").style.display="inline";
        document.getElementById("x-officers").style.display="inline";

        return aofficers=0;
    }
}

function exit(){

    if (aofficers==0) {
        document.getElementById("a").setAttribute("class", "adviser");
        document.getElementById("o1").setAttribute("class", "officers1");
        document.getElementById("o2").setAttribute("class", "officers2");
        document.getElementById("o3").setAttribute("class", "officers3");
        document.getElementById("o4").setAttribute("class", "officers4");
        document.getElementById("o5").setAttribute("class", "officers5");
        document.getElementById("o6").setAttribute("class", "officers6");
        document.getElementById("o7").setAttribute("class", "officers7");
        document.getElementById("initialLayout-officers").style.background = "rgba(255, 245, 194, .8)";
        document.getElementById("initialLayout-officers").setAttribute("class", "initialLayout-officers");
        document.getElementById("deets-officers").removeAttribute("class", "rightpanel-officers");
        document.getElementById("deets-officers").style.display="none";
        document.getElementById("x-officers").style.display="none"

        document.getElementById("im0").style.transform="scale(1)";
        document.getElementById("name0").style.marginTop="20%";
        document.getElementById("im0").style.border="#bd7b00 inset 10px";

        document.getElementById("im1").style.transform="scale(1)";
        document.getElementById("name1").style.marginTop="20%";
        document.getElementById("im1").style.border="#bd7b00 inset 10px";

        document.getElementById("im2").style.transform="scale(1)";
        document.getElementById("name2").style.marginTop="20%";
        document.getElementById("im2").style.border="#bd7b00 inset 10px";

        document.getElementById("im3").style.transform="scale(1)";
        document.getElementById("name3").style.marginTop="20%";
        document.getElementById("im3").style.border="#bd7b00 inset 10px";

        document.getElementById("im4").style.transform="scale(1)";
        document.getElementById("name4").style.marginTop="20%";
        document.getElementById("im4").style.border="#bd7b00 inset 10px";

        document.getElementById("im5").style.transform="scale(1)";
        document.getElementById("name5").style.marginTop="20%";
        document.getElementById("im5").style.border="#bd7b00 inset 10px";

        document.getElementById("im6").style.transform="scale(1)";
        document.getElementById("name6").style.marginTop="20%";
        document.getElementById("im6").style.border="#bd7b00 inset 10px";

        document.getElementById("im7").style.transform="scale(1)";
        document.getElementById("name7").style.marginTop="20%";
        document.getElementById("im7").style.border="#bd7b00 inset 10px";
        
        document.getElementById("im8").style.transform="scale(1)";
        document.getElementById("name8").style.marginTop="20%";
        document.getElementById("im8").style.border="#bd7b00 inset 10px";

        document.getElementById("im9").style.transform="scale(1)";
        document.getElementById("name9").style.marginTop="20%";
        document.getElementById("im9").style.border="#bd7b00 inset 10px";

        document.getElementById("im10").style.transform="scale(1)";
        document.getElementById("name10").style.marginTop="20%";
        document.getElementById("im10").style.border="#bd7b00 inset 10px";

        document.getElementById("im11").style.transform="scale(1)";
        document.getElementById("name11").style.marginTop="20%";
        document.getElementById("im11").style.border="#bd7b00 inset 10px";
        
        document.getElementById("im12").style.transform="scale(1)";
        document.getElementById("name12").style.marginTop="20%";
        document.getElementById("im12").style.border="#bd7b00 inset 10px";

        document.getElementById("im13").style.transform="scale(1)";
        document.getElementById("name13").style.marginTop="20%";
        document.getElementById("im13").style.border="#bd7b00 inset 10px";

        document.getElementById("im14").style.transform="scale(1)";
        document.getElementById("name14").style.marginTop="20%";
        document.getElementById("im14").style.border="#bd7b00 inset 10px";

        document.getElementById("im15").style.transform="scale(1)";
        document.getElementById("name15").style.marginTop="20%";
        document.getElementById("im15").style.border="#bd7b00 inset 10px";
        return aofficers=1;
    }
}

function change0(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1.3)';
    document.getElementById("name0").style.marginTop="30%";
    document.getElementById("im0").style.border="#3F2A1E inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1)';
    document.getElementById("name1").style.marginTop="20%";
    document.getElementById("im1").style.border="#bd7b00 inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1)';
    document.getElementById("name2").style.marginTop="20%";
    document.getElementById("im2").style.border="#bd7b00 inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1)';
    document.getElementById("name3").style.marginTop="20%";
    document.getElementById("im3").style.border="#bd7b00 inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1)';
    document.getElementById("name4").style.marginTop="20%";
    document.getElementById("im4").style.border="#bd7b00 inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1)';
    document.getElementById("name5").style.marginTop="20%";
    document.getElementById("im5").style.border="#bd7b00 inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1)';
    document.getElementById("name6").style.marginTop="20%";
    document.getElementById("im6").style.border="#bd7b00 inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1)';
    document.getElementById("name7").style.marginTop="20%";
    document.getElementById("im7").style.border="#bd7b00 inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1)';
    document.getElementById("name8").style.marginTop="20%";
    document.getElementById("im8").style.border="#bd7b00 inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1)';
    document.getElementById("name9").style.marginTop="20%";
    document.getElementById("im9").style.border="#bd7b00 inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1)';
    document.getElementById("name10").style.marginTop="20%";
    document.getElementById("im10").style.border="#bd7b00 inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1)';
    document.getElementById("name11").style.marginTop="20%";
    document.getElementById("im11").style.border="#bd7b00 inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1)';
    document.getElementById("name12").style.marginTop="20%";
    document.getElementById("im12").style.border="#bd7b00 inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1)';
    document.getElementById("name13").style.marginTop="20%";
    document.getElementById("im13").style.border="#bd7b00 inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1)';
    document.getElementById("name14").style.marginTop="20%";
    document.getElementById("im14").style.border="#bd7b00 inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1)';
    document.getElementById("name15").style.marginTop="20%";
    document.getElementById("im15").style.border="#bd7b00 inset 10px";
};

function change1(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1)';
    document.getElementById("name0").style.marginTop="20%";
    document.getElementById("im0").style.border="#bd7b00 inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1.3)';
    document.getElementById("name1").style.marginTop="30%";
    document.getElementById("im1").style.border="#3F2A1E inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1)';
    document.getElementById("name2").style.marginTop="20%";
    document.getElementById("im2").style.border="#bd7b00 inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1)';
    document.getElementById("name3").style.marginTop="20%";
    document.getElementById("im3").style.border="#bd7b00 inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1)';
    document.getElementById("name4").style.marginTop="20%";
    document.getElementById("im4").style.border="#bd7b00 inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1)';
    document.getElementById("name5").style.marginTop="20%";
    document.getElementById("im5").style.border="#bd7b00 inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1)';
    document.getElementById("name6").style.marginTop="20%";
    document.getElementById("im6").style.border="#bd7b00 inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1)';
    document.getElementById("name7").style.marginTop="20%";
    document.getElementById("im7").style.border="#bd7b00 inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1)';
    document.getElementById("name8").style.marginTop="20%";
    document.getElementById("im8").style.border="#bd7b00 inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1)';
    document.getElementById("name9").style.marginTop="20%";
    document.getElementById("im9").style.border="#bd7b00 inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1)';
    document.getElementById("name10").style.marginTop="20%";
    document.getElementById("im10").style.border="#bd7b00 inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1)';
    document.getElementById("name11").style.marginTop="20%";
    document.getElementById("im11").style.border="#bd7b00 inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1)';
    document.getElementById("name12").style.marginTop="20%";
    document.getElementById("im12").style.border="#bd7b00 inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1)';
    document.getElementById("name13").style.marginTop="20%";
    document.getElementById("im13").style.border="#bd7b00 inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1)';
    document.getElementById("name14").style.marginTop="20%";
    document.getElementById("im14").style.border="#bd7b00 inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1)';
    document.getElementById("name15").style.marginTop="20%";
    document.getElementById("im15").style.border="#bd7b00 inset 10px";
};

function change2(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1)';
    document.getElementById("name0").style.marginTop="20%";
    document.getElementById("im0").style.border="#bd7b00 inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1)';
    document.getElementById("name1").style.marginTop="20%";
    document.getElementById("im1").style.border="#bd7b00 inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1.3)';
    document.getElementById("name2").style.marginTop="30%";
    document.getElementById("im2").style.border="#3F2A1E inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1)';
    document.getElementById("name3").style.marginTop="20%";
    document.getElementById("im3").style.border="#bd7b00 inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1)';
    document.getElementById("name4").style.marginTop="20%";
    document.getElementById("im4").style.border="#bd7b00 inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1)';
    document.getElementById("name5").style.marginTop="20%";
    document.getElementById("im5").style.border="#bd7b00 inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1)';
    document.getElementById("name6").style.marginTop="20%";
    document.getElementById("im6").style.border="#bd7b00 inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1)';
    document.getElementById("name7").style.marginTop="20%";
    document.getElementById("im7").style.border="#bd7b00 inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1)';
    document.getElementById("name8").style.marginTop="20%";
    document.getElementById("im8").style.border="#bd7b00 inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1)';
    document.getElementById("name9").style.marginTop="20%";
    document.getElementById("im9").style.border="#bd7b00 inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1)';
    document.getElementById("name10").style.marginTop="20%";
    document.getElementById("im10").style.border="#bd7b00 inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1)';
    document.getElementById("name11").style.marginTop="20%";
    document.getElementById("im11").style.border="#bd7b00 inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1)';
    document.getElementById("name12").style.marginTop="20%";
    document.getElementById("im12").style.border="#bd7b00 inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1)';
    document.getElementById("name13").style.marginTop="20%";
    document.getElementById("im13").style.border="#bd7b00 inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1)';
    document.getElementById("name14").style.marginTop="20%";
    document.getElementById("im14").style.border="#bd7b00 inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1)';
    document.getElementById("name15").style.marginTop="20%";
    document.getElementById("im15").style.border="#bd7b00 inset 10px";
};

function change3(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1)';
    document.getElementById("name0").style.marginTop="20%";
    document.getElementById("im0").style.border="#bd7b00 inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1)';
    document.getElementById("name1").style.marginTop="20%";
    document.getElementById("im1").style.border="#bd7b00 inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1)';
    document.getElementById("name2").style.marginTop="20%";
    document.getElementById("im2").style.border="#bd7b00 inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1.3)';
    document.getElementById("name3").style.marginTop="30%";
    document.getElementById("im3").style.border="#3F2A1E inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1)';
    document.getElementById("name4").style.marginTop="20%";
    document.getElementById("im4").style.border="#bd7b00 inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1)';
    document.getElementById("name5").style.marginTop="20%";
    document.getElementById("im5").style.border="#bd7b00 inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1)';
    document.getElementById("name6").style.marginTop="20%";
    document.getElementById("im6").style.border="#bd7b00 inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1)';
    document.getElementById("name7").style.marginTop="20%";
    document.getElementById("im7").style.border="#bd7b00 inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1)';
    document.getElementById("name8").style.marginTop="20%";
    document.getElementById("im8").style.border="#bd7b00 inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1)';
    document.getElementById("name9").style.marginTop="20%";
    document.getElementById("im9").style.border="#bd7b00 inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1)';
    document.getElementById("name10").style.marginTop="20%";
    document.getElementById("im10").style.border="#bd7b00 inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1)';
    document.getElementById("name11").style.marginTop="20%";
    document.getElementById("im11").style.border="#bd7b00 inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1)';
    document.getElementById("name12").style.marginTop="20%";
    document.getElementById("im12").style.border="#bd7b00 inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1)';
    document.getElementById("name13").style.marginTop="20%";
    document.getElementById("im13").style.border="#bd7b00 inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1)';
    document.getElementById("name14").style.marginTop="20%";
    document.getElementById("im14").style.border="#bd7b00 inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1)';
    document.getElementById("name15").style.marginTop="20%";
    document.getElementById("im15").style.border="#bd7b00 inset 10px";
};

function change4(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1)';
    document.getElementById("name0").style.marginTop="20%";
    document.getElementById("im0").style.border="#bd7b00 inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1)';
    document.getElementById("name1").style.marginTop="20%";
    document.getElementById("im1").style.border="#bd7b00 inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1)';
    document.getElementById("name2").style.marginTop="20%";
    document.getElementById("im2").style.border="#bd7b00 inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1)';
    document.getElementById("name3").style.marginTop="20%";
    document.getElementById("im3").style.border="#bd7b00 inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1.3)';
    document.getElementById("name4").style.marginTop="30%";
    document.getElementById("im4").style.border="#3F2A1E inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1)';
    document.getElementById("name5").style.marginTop="20%";
    document.getElementById("im5").style.border="#bd7b00 inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1)';
    document.getElementById("name6").style.marginTop="20%";
    document.getElementById("im6").style.border="#bd7b00 inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1)';
    document.getElementById("name7").style.marginTop="20%";
    document.getElementById("im7").style.border="#bd7b00 inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1)';
    document.getElementById("name8").style.marginTop="20%";
    document.getElementById("im8").style.border="#bd7b00 inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1)';
    document.getElementById("name9").style.marginTop="20%";
    document.getElementById("im9").style.border="#bd7b00 inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1)';
    document.getElementById("name10").style.marginTop="20%";
    document.getElementById("im10").style.border="#bd7b00 inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1)';
    document.getElementById("name11").style.marginTop="20%";
    document.getElementById("im11").style.border="#bd7b00 inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1)';
    document.getElementById("name12").style.marginTop="20%";
    document.getElementById("im12").style.border="#bd7b00 inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1)';
    document.getElementById("name13").style.marginTop="20%";
    document.getElementById("im13").style.border="#bd7b00 inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1)';
    document.getElementById("name14").style.marginTop="20%";
    document.getElementById("im14").style.border="#bd7b00 inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1)';
    document.getElementById("name15").style.marginTop="20%";
    document.getElementById("im15").style.border="#bd7b00 inset 10px";
};

function change5(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1)';
    document.getElementById("name0").style.marginTop="20%";
    document.getElementById("im0").style.border="#bd7b00 inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1)';
    document.getElementById("name1").style.marginTop="20%";
    document.getElementById("im1").style.border="#bd7b00 inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1)';
    document.getElementById("name2").style.marginTop="20%";
    document.getElementById("im2").style.border="#bd7b00 inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1)';
    document.getElementById("name3").style.marginTop="20%";
    document.getElementById("im3").style.border="#bd7b00 inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1)';
    document.getElementById("name4").style.marginTop="20%";
    document.getElementById("im4").style.border="#bd7b00 inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1.3)';
    document.getElementById("name5").style.marginTop="30%";
    document.getElementById("im5").style.border="#3F2A1E inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1)';
    document.getElementById("name6").style.marginTop="20%";
    document.getElementById("im6").style.border="#bd7b00 inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1)';
    document.getElementById("name7").style.marginTop="20%";
    document.getElementById("im7").style.border="#bd7b00 inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1)';
    document.getElementById("name8").style.marginTop="20%";
    document.getElementById("im8").style.border="#bd7b00 inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1)';
    document.getElementById("name9").style.marginTop="20%";
    document.getElementById("im9").style.border="#bd7b00 inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1)';
    document.getElementById("name10").style.marginTop="20%";
    document.getElementById("im10").style.border="#bd7b00 inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1)';
    document.getElementById("name11").style.marginTop="20%";
    document.getElementById("im11").style.border="#bd7b00 inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1)';
    document.getElementById("name12").style.marginTop="20%";
    document.getElementById("im12").style.border="#bd7b00 inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1)';
    document.getElementById("name13").style.marginTop="20%";
    document.getElementById("im13").style.border="#bd7b00 inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1)';
    document.getElementById("name14").style.marginTop="20%";
    document.getElementById("im14").style.border="#bd7b00 inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1)';
    document.getElementById("name15").style.marginTop="20%";
    document.getElementById("im15").style.border="#bd7b00 inset 10px";
};

function change6(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1)';
    document.getElementById("name0").style.marginTop="20%";
    document.getElementById("im0").style.border="#bd7b00 inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1)';
    document.getElementById("name1").style.marginTop="20%";
    document.getElementById("im1").style.border="#bd7b00 inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1)';
    document.getElementById("name2").style.marginTop="20%";
    document.getElementById("im2").style.border="#bd7b00 inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1)';
    document.getElementById("name3").style.marginTop="20%";
    document.getElementById("im3").style.border="#bd7b00 inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1)';
    document.getElementById("name4").style.marginTop="20%";
    document.getElementById("im4").style.border="#bd7b00 inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1)';
    document.getElementById("name5").style.marginTop="20%";
    document.getElementById("im5").style.border="#bd7b00 inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1.3)';
    document.getElementById("name6").style.marginTop="30%";
    document.getElementById("im6").style.border="#3F2A1E inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1)';
    document.getElementById("name7").style.marginTop="20%";
    document.getElementById("im7").style.border="#bd7b00 inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1)';
    document.getElementById("name8").style.marginTop="20%";
    document.getElementById("im8").style.border="#bd7b00 inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1)';
    document.getElementById("name9").style.marginTop="20%";
    document.getElementById("im9").style.border="#bd7b00 inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1)';
    document.getElementById("name10").style.marginTop="20%";
    document.getElementById("im10").style.border="#bd7b00 inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1)';
    document.getElementById("name11").style.marginTop="20%";
    document.getElementById("im11").style.border="#bd7b00 inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1)';
    document.getElementById("name12").style.marginTop="20%";
    document.getElementById("im12").style.border="#bd7b00 inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1)';
    document.getElementById("name13").style.marginTop="20%";
    document.getElementById("im13").style.border="#bd7b00 inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1)';
    document.getElementById("name14").style.marginTop="20%";
    document.getElementById("im14").style.border="#bd7b00 inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1)';
    document.getElementById("name15").style.marginTop="20%";
    document.getElementById("im15").style.border="#bd7b00 inset 10px";
};

function change7(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1)';
    document.getElementById("name0").style.marginTop="20%";
    document.getElementById("im0").style.border="#bd7b00 inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1)';
    document.getElementById("name1").style.marginTop="20%";
    document.getElementById("im1").style.border="#bd7b00 inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1)';
    document.getElementById("name2").style.marginTop="20%";
    document.getElementById("im2").style.border="#bd7b00 inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1)';
    document.getElementById("name3").style.marginTop="20%";
    document.getElementById("im3").style.border="#bd7b00 inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1)';
    document.getElementById("name4").style.marginTop="20%";
    document.getElementById("im4").style.border="#bd7b00 inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1)';
    document.getElementById("name5").style.marginTop="20%";
    document.getElementById("im5").style.border="#bd7b00 inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1)';
    document.getElementById("name6").style.marginTop="20%";
    document.getElementById("im6").style.border="#bd7b00 inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1.3)';
    document.getElementById("name7").style.marginTop="30%";
    document.getElementById("im7").style.border="#3F2A1E inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1)';
    document.getElementById("name8").style.marginTop="20%";
    document.getElementById("im8").style.border="#bd7b00 inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1)';
    document.getElementById("name9").style.marginTop="20%";
    document.getElementById("im9").style.border="#bd7b00 inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1)';
    document.getElementById("name10").style.marginTop="20%";
    document.getElementById("im10").style.border="#bd7b00 inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1)';
    document.getElementById("name11").style.marginTop="20%";
    document.getElementById("im11").style.border="#bd7b00 inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1)';
    document.getElementById("name12").style.marginTop="20%";
    document.getElementById("im12").style.border="#bd7b00 inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1)';
    document.getElementById("name13").style.marginTop="20%";
    document.getElementById("im13").style.border="#bd7b00 inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1)';
    document.getElementById("name14").style.marginTop="20%";
    document.getElementById("im14").style.border="#bd7b00 inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1)';
    document.getElementById("name15").style.marginTop="20%";
    document.getElementById("im15").style.border="#bd7b00 inset 10px";
};

function change8(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1)';
    document.getElementById("name0").style.marginTop="20%";
    document.getElementById("im0").style.border="#bd7b00 inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1)';
    document.getElementById("name1").style.marginTop="20%";
    document.getElementById("im1").style.border="#bd7b00 inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1)';
    document.getElementById("name2").style.marginTop="20%";
    document.getElementById("im2").style.border="#bd7b00 inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1)';
    document.getElementById("name3").style.marginTop="20%";
    document.getElementById("im3").style.border="#bd7b00 inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1)';
    document.getElementById("name4").style.marginTop="20%";
    document.getElementById("im4").style.border="#bd7b00 inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1)';
    document.getElementById("name5").style.marginTop="20%";
    document.getElementById("im5").style.border="#bd7b00 inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1)';
    document.getElementById("name6").style.marginTop="20%";
    document.getElementById("im6").style.border="#bd7b00 inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1)';
    document.getElementById("name7").style.marginTop="20%";
    document.getElementById("im7").style.border="#bd7b00 inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1.3)';
    document.getElementById("name8").style.marginTop="30%";
    document.getElementById("im8").style.border="#3F2A1E inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1)';
    document.getElementById("name9").style.marginTop="20%";
    document.getElementById("im9").style.border="#bd7b00 inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1)';
    document.getElementById("name10").style.marginTop="20%";
    document.getElementById("im10").style.border="#bd7b00 inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1)';
    document.getElementById("name11").style.marginTop="20%";
    document.getElementById("im11").style.border="#bd7b00 inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1)';
    document.getElementById("name12").style.marginTop="20%";
    document.getElementById("im12").style.border="#bd7b00 inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1)';
    document.getElementById("name13").style.marginTop="20%";
    document.getElementById("im13").style.border="#bd7b00 inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1)';
    document.getElementById("name14").style.marginTop="20%";
    document.getElementById("im14").style.border="#bd7b00 inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1)';
    document.getElementById("name15").style.marginTop="20%";
    document.getElementById("im15").style.border="#bd7b00 inset 10px";
};

function change9(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1)';
    document.getElementById("name0").style.marginTop="20%";
    document.getElementById("im0").style.border="#bd7b00 inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1)';
    document.getElementById("name1").style.marginTop="20%";
    document.getElementById("im1").style.border="#bd7b00 inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1)';
    document.getElementById("name2").style.marginTop="20%";
    document.getElementById("im2").style.border="#bd7b00 inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1)';
    document.getElementById("name3").style.marginTop="20%";
    document.getElementById("im3").style.border="#bd7b00 inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1)';
    document.getElementById("name4").style.marginTop="20%";
    document.getElementById("im4").style.border="#bd7b00 inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1)';
    document.getElementById("name5").style.marginTop="20%";
    document.getElementById("im5").style.border="#bd7b00 inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1)';
    document.getElementById("name6").style.marginTop="20%";
    document.getElementById("im6").style.border="#bd7b00 inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1)';
    document.getElementById("name7").style.marginTop="20%";
    document.getElementById("im7").style.border="#bd7b00 inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1)';
    document.getElementById("name8").style.marginTop="20%";
    document.getElementById("im8").style.border="#bd7b00 inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1.3)';
    document.getElementById("name9").style.marginTop="30%";
    document.getElementById("im9").style.border="#3F2A1E inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1)';
    document.getElementById("name10").style.marginTop="20%";
    document.getElementById("im10").style.border="#bd7b00 inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1)';
    document.getElementById("name11").style.marginTop="20%";
    document.getElementById("im11").style.border="#bd7b00 inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1)';
    document.getElementById("name12").style.marginTop="20%";
    document.getElementById("im12").style.border="#bd7b00 inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1)';
    document.getElementById("name13").style.marginTop="20%";
    document.getElementById("im13").style.border="#bd7b00 inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1)';
    document.getElementById("name14").style.marginTop="20%";
    document.getElementById("im14").style.border="#bd7b00 inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1)';
    document.getElementById("name15").style.marginTop="20%";
    document.getElementById("im15").style.border="#bd7b00 inset 10px";
};

function change10(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1)';
    document.getElementById("name0").style.marginTop="20%";
    document.getElementById("im0").style.border="#bd7b00 inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1)';
    document.getElementById("name1").style.marginTop="20%";
    document.getElementById("im1").style.border="#bd7b00 inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1)';
    document.getElementById("name2").style.marginTop="20%";
    document.getElementById("im2").style.border="#bd7b00 inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1)';
    document.getElementById("name3").style.marginTop="20%";
    document.getElementById("im3").style.border="#bd7b00 inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1)';
    document.getElementById("name4").style.marginTop="20%";
    document.getElementById("im4").style.border="#bd7b00 inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1)';
    document.getElementById("name5").style.marginTop="20%";
    document.getElementById("im5").style.border="#bd7b00 inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1)';
    document.getElementById("name6").style.marginTop="20%";
    document.getElementById("im6").style.border="#bd7b00 inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1)';
    document.getElementById("name7").style.marginTop="20%";
    document.getElementById("im7").style.border="#bd7b00 inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1)';
    document.getElementById("name8").style.marginTop="20%";
    document.getElementById("im8").style.border="#bd7b00 inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1)';
    document.getElementById("name9").style.marginTop="20%";
    document.getElementById("im9").style.border="#bd7b00 inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1.3)';
    document.getElementById("name10").style.marginTop="30%";
    document.getElementById("im10").style.border="#3F2A1E inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1)';
    document.getElementById("name11").style.marginTop="20%";
    document.getElementById("im11").style.border="#bd7b00 inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1)';
    document.getElementById("name12").style.marginTop="20%";
    document.getElementById("im12").style.border="#bd7b00 inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1)';
    document.getElementById("name13").style.marginTop="20%";
    document.getElementById("im13").style.border="#bd7b00 inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1)';
    document.getElementById("name14").style.marginTop="20%";
    document.getElementById("im14").style.border="#bd7b00 inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1)';
    document.getElementById("name15").style.marginTop="20%";
    document.getElementById("im15").style.border="#bd7b00 inset 10px";
};

function change11(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1)';
    document.getElementById("name0").style.marginTop="20%";
    document.getElementById("im0").style.border="#bd7b00 inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1)';
    document.getElementById("name1").style.marginTop="20%";
    document.getElementById("im1").style.border="#bd7b00 inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1)';
    document.getElementById("name2").style.marginTop="20%";
    document.getElementById("im2").style.border="#bd7b00 inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1)';
    document.getElementById("name3").style.marginTop="20%";
    document.getElementById("im3").style.border="#bd7b00 inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1)';
    document.getElementById("name4").style.marginTop="20%";
    document.getElementById("im4").style.border="#bd7b00 inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1)';
    document.getElementById("name5").style.marginTop="20%";
    document.getElementById("im5").style.border="#bd7b00 inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1)';
    document.getElementById("name6").style.marginTop="20%";
    document.getElementById("im6").style.border="#bd7b00 inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1)';
    document.getElementById("name7").style.marginTop="20%";
    document.getElementById("im7").style.border="#bd7b00 inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1)';
    document.getElementById("name8").style.marginTop="20%";
    document.getElementById("im8").style.border="#bd7b00 inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1)';
    document.getElementById("name9").style.marginTop="20%";
    document.getElementById("im9").style.border="#bd7b00 inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1)';
    document.getElementById("name10").style.marginTop="20%";
    document.getElementById("im10").style.border="#bd7b00 inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1.3)';
    document.getElementById("name11").style.marginTop="30%";
    document.getElementById("im11").style.border="#3F2A1E inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1)';
    document.getElementById("name12").style.marginTop="20%";
    document.getElementById("im12").style.border="#bd7b00 inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1)';
    document.getElementById("name13").style.marginTop="20%";
    document.getElementById("im13").style.border="#bd7b00 inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1)';
    document.getElementById("name14").style.marginTop="20%";
    document.getElementById("im14").style.border="#bd7b00 inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1)';
    document.getElementById("name15").style.marginTop="20%";
    document.getElementById("im15").style.border="#bd7b00 inset 10px";
};

function change12(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1)';
    document.getElementById("name0").style.marginTop="20%";
    document.getElementById("im0").style.border="#bd7b00 inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1)';
    document.getElementById("name1").style.marginTop="20%";
    document.getElementById("im1").style.border="#bd7b00 inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1)';
    document.getElementById("name2").style.marginTop="20%";
    document.getElementById("im2").style.border="#bd7b00 inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1)';
    document.getElementById("name3").style.marginTop="20%";
    document.getElementById("im3").style.border="#bd7b00 inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1)';
    document.getElementById("name4").style.marginTop="20%";
    document.getElementById("im4").style.border="#bd7b00 inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1)';
    document.getElementById("name5").style.marginTop="20%";
    document.getElementById("im5").style.border="#bd7b00 inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1)';
    document.getElementById("name6").style.marginTop="20%";
    document.getElementById("im6").style.border="#bd7b00 inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1)';
    document.getElementById("name7").style.marginTop="20%";
    document.getElementById("im7").style.border="#bd7b00 inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1)';
    document.getElementById("name8").style.marginTop="20%";
    document.getElementById("im8").style.border="#bd7b00 inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1)';
    document.getElementById("name9").style.marginTop="20%";
    document.getElementById("im9").style.border="#bd7b00 inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1)';
    document.getElementById("name10").style.marginTop="20%";
    document.getElementById("im10").style.border="#bd7b00 inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1)';
    document.getElementById("name11").style.marginTop="20%";
    document.getElementById("im11").style.border="#bd7b00 inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1.3)';
    document.getElementById("name12").style.marginTop="30%";
    document.getElementById("im12").style.border="#3F2A1E inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1)';
    document.getElementById("name13").style.marginTop="20%";
    document.getElementById("im13").style.border="#bd7b00 inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1)';
    document.getElementById("name14").style.marginTop="20%";
    document.getElementById("im14").style.border="#bd7b00 inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1)';
    document.getElementById("name15").style.marginTop="20%";
    document.getElementById("im15").style.border="#bd7b00 inset 10px";
};

function change13(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1)';
    document.getElementById("name0").style.marginTop="20%";
    document.getElementById("im0").style.border="#bd7b00 inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1)';
    document.getElementById("name1").style.marginTop="20%";
    document.getElementById("im1").style.border="#bd7b00 inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1)';
    document.getElementById("name2").style.marginTop="20%";
    document.getElementById("im2").style.border="#bd7b00 inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1)';
    document.getElementById("name3").style.marginTop="20%";
    document.getElementById("im3").style.border="#bd7b00 inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1)';
    document.getElementById("name4").style.marginTop="20%";
    document.getElementById("im4").style.border="#bd7b00 inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1)';
    document.getElementById("name5").style.marginTop="20%";
    document.getElementById("im5").style.border="#bd7b00 inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1)';
    document.getElementById("name6").style.marginTop="20%";
    document.getElementById("im6").style.border="#bd7b00 inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1)';
    document.getElementById("name7").style.marginTop="20%";
    document.getElementById("im7").style.border="#bd7b00 inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1)';
    document.getElementById("name8").style.marginTop="20%";
    document.getElementById("im8").style.border="#bd7b00 inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1)';
    document.getElementById("name9").style.marginTop="20%";
    document.getElementById("im9").style.border="#bd7b00 inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1)';
    document.getElementById("name10").style.marginTop="20%";
    document.getElementById("im10").style.border="#bd7b00 inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1)';
    document.getElementById("name11").style.marginTop="20%";
    document.getElementById("im11").style.border="#bd7b00 inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1)';
    document.getElementById("name12").style.marginTop="20%";
    document.getElementById("im12").style.border="#bd7b00 inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1.3)';
    document.getElementById("name13").style.marginTop="30%";
    document.getElementById("im13").style.border="#3F2A1E inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1)';
    document.getElementById("name14").style.marginTop="20%";
    document.getElementById("im14").style.border="#bd7b00 inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1)';
    document.getElementById("name15").style.marginTop="20%";
    document.getElementById("im15").style.border="#bd7b00 inset 10px";
};

function change14(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1)';
    document.getElementById("name0").style.marginTop="20%";
    document.getElementById("im0").style.border="#bd7b00 inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1)';
    document.getElementById("name1").style.marginTop="20%";
    document.getElementById("im1").style.border="#bd7b00 inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1)';
    document.getElementById("name2").style.marginTop="20%";
    document.getElementById("im2").style.border="#bd7b00 inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1)';
    document.getElementById("name3").style.marginTop="20%";
    document.getElementById("im3").style.border="#bd7b00 inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1)';
    document.getElementById("name4").style.marginTop="20%";
    document.getElementById("im4").style.border="#bd7b00 inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1)';
    document.getElementById("name5").style.marginTop="20%";
    document.getElementById("im5").style.border="#bd7b00 inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1)';
    document.getElementById("name6").style.marginTop="20%";
    document.getElementById("im6").style.border="#bd7b00 inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1)';
    document.getElementById("name7").style.marginTop="20%";
    document.getElementById("im7").style.border="#bd7b00 inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1)';
    document.getElementById("name8").style.marginTop="20%";
    document.getElementById("im8").style.border="#bd7b00 inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1)';
    document.getElementById("name9").style.marginTop="20%";
    document.getElementById("im9").style.border="#bd7b00 inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1)';
    document.getElementById("name10").style.marginTop="20%";
    document.getElementById("im10").style.border="#bd7b00 inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1)';
    document.getElementById("name11").style.marginTop="20%";
    document.getElementById("im11").style.border="#bd7b00 inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1)';
    document.getElementById("name12").style.marginTop="20%";
    document.getElementById("im12").style.border="#bd7b00 inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1)';
    document.getElementById("name13").style.marginTop="20%";
    document.getElementById("im13").style.border="#bd7b00 inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1.3)';
    document.getElementById("name14").style.marginTop="30%";
    document.getElementById("im14").style.border="#3F2A1E inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1)';
    document.getElementById("name15").style.marginTop="20%";
    document.getElementById("im15").style.border="#bd7b00 inset 10px";
};

function change15(){
    const enlarge = document.getElementById("im0");
    enlarge.style.transform = 'scale(1)';
    document.getElementById("name0").style.marginTop="20%";
    document.getElementById("im0").style.border="#bd7b00 inset 10px";

    const enlarge1 = document.getElementById("im1");
    enlarge1.style.transform = 'scale(1)';
    document.getElementById("name1").style.marginTop="20%";
    document.getElementById("im1").style.border="#bd7b00 inset 10px";

    const enlarge2 = document.getElementById("im2");
    enlarge2.style.transform = 'scale(1)';
    document.getElementById("name2").style.marginTop="20%";
    document.getElementById("im2").style.border="#bd7b00 inset 10px";
    
    const enlarge3 = document.getElementById("im3");
    enlarge3.style.transform = 'scale(1)';
    document.getElementById("name3").style.marginTop="20%";
    document.getElementById("im3").style.border="#bd7b00 inset 10px";

    const enlarge4 = document.getElementById("im4");
    enlarge4.style.transform = 'scale(1)';
    document.getElementById("name4").style.marginTop="20%";
    document.getElementById("im4").style.border="#bd7b00 inset 10px";

    const enlarge5 = document.getElementById("im5");
    enlarge5.style.transform = 'scale(1)';
    document.getElementById("name5").style.marginTop="20%";
    document.getElementById("im5").style.border="#bd7b00 inset 10px";

    const enlarge6 = document.getElementById("im6");
    enlarge6.style.transform = 'scale(1)';
    document.getElementById("name6").style.marginTop="20%";
    document.getElementById("im6").style.border="#bd7b00 inset 10px";
    
    const enlarge7 = document.getElementById("im7");
    enlarge7.style.transform = 'scale(1)';
    document.getElementById("name7").style.marginTop="20%";
    document.getElementById("im7").style.border="#bd7b00 inset 10px";

    const enlarge8 = document.getElementById("im8");
    enlarge8.style.transform = 'scale(1)';
    document.getElementById("name8").style.marginTop="20%";
    document.getElementById("im8").style.border="#bd7b00 inset 10px";

    const enlarge9 = document.getElementById("im9");
    enlarge9.style.transform = 'scale(1)';
    document.getElementById("name9").style.marginTop="20%";
    document.getElementById("im9").style.border="#bd7b00 inset 10px";

    const enlarge10 = document.getElementById("im10");
    enlarge10.style.transform = 'scale(1)';
    document.getElementById("name10").style.marginTop="20%";
    document.getElementById("im10").style.border="#bd7b00 inset 10px";
    
    const enlarge11 = document.getElementById("im11");
    enlarge11.style.transform = 'scale(1)';
    document.getElementById("name11").style.marginTop="20%";
    document.getElementById("im11").style.border="#bd7b00 inset 10px";

    const enlarge12 = document.getElementById("im12");
    enlarge12.style.transform = 'scale(1)';
    document.getElementById("name12").style.marginTop="20%";
    document.getElementById("im12").style.border="#bd7b00 inset 10px";

    const enlarge13 = document.getElementById("im13");
    enlarge13.style.transform = 'scale(1)';
    document.getElementById("name13").style.marginTop="20%";
    document.getElementById("im13").style.border="#bd7b00 inset 10px";
    
    const enlarge14 = document.getElementById("im14");
    enlarge14.style.transform = 'scale(1)';
    document.getElementById("name14").style.marginTop="20%";
    document.getElementById("im14").style.border="#bd7b00 inset 10px";

    const enlarge15 = document.getElementById("im15");
    enlarge15.style.transform = 'scale(1.3)';
    document.getElementById("name15").style.marginTop="30%";
    document.getElementById("im15").style.border="#3F2A1E inset 10px";
};
//hanggang function change15()
function changeDetails0(){

document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA ADVISER.png";
document.getElementById("position").innerHTML = "TIPA ADVISER";
document.getElementById("name").innerHTML = "Maria Cecilia P. San Jose";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Maria Cecilia P. San Jose, a Bachelor of Science in Computer Science Professor and currently the Adviser of TIPA year 2024-2025.";
}

function changeDetails1(){
document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA PRESIDENT.png";
document.getElementById("position").innerHTML = "TIPA PRESIDENT";
document.getElementById("name").innerHTML = "Michelle C. Pagurayan";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Michelle C. Pagurayan, currently in her third year and enrolled in class III-E1, serves as the President of TIPA. Prior to this position, she did not hold any former roles. As an officer, Michelle faced challenges due to her limited leadership experience, particularly in guiding fellow officers and adapting to organizational responsibilities. However, with time, she found it easier to navigate these challenges. Moving forward, Michelle aims to enhance TIPA’s reliability and effectiveness for Computer Science students, as well as to organize activities that contribute to personal and leadership development.";
}

function changeDetails2(){
document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA VICE PRES 1.png";
document.getElementById("position").innerHTML = "VICE PRESIDENT (EXTERNAL)";
document.getElementById("name").innerHTML = "Lester M. De Vera";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lester M. De Vera, a third-year student in the Bachelor of Science in Computer Science program, is enrolled in class III-E2. He currently holds the position of Vice President External in TIPA and is focused on obtaining the organization’s shirt while assisting the president with signatures and proposals.";
}

function changeDetails3(){
document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA VICE PRES 2.png";
document.getElementById("position").innerHTML = "VICE PRESIDENT (INTERNAL)";
document.getElementById("name").innerHTML = "Vonn Teodoro";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vonn Garret San Juan Teodoro, currently in my second year in Bachelor of Science in Computer Science, enrolled in class 2-E. I serve as the Vice President Internal Affairs for TIPA. Furthermore, I previously held the same position during the last academic year, and I aim to undertake additional responsibilities to accomplish more activities.";
}
function changeDetails4(){
document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA GEN SECRETARY.png";
document.getElementById("position").innerHTML = "GENERAL SECRETARY";
document.getElementById("name").innerHTML = "Roxette Reyes";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Roxette Narag Reyes, currently in her third year in Bachelor of Science in Computer Science, enrolled in 3-E2. She previously hold the position of Deputy Secretary, 2023-2024 and currently the General Secretary of TIPA year 024-2025.";
}
function changeDetails5(){
document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA DEP. SECRETARY.png";
document.getElementById("position").innerHTML = "DEPUTY SECRETARY";
document.getElementById("name").innerHTML = "Alecks Antazo";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ma. Alecks Ambagan Antazo is a member of class II-E and currently holds the position of Deputy Secretary in TIPA. During her freshman year, she served as a member of the Executive Project Committee. As an officer, one of her challenges has been voicing her opinions during meetings, an area she aims to improve. Looking ahead, she anticipates TIPA organizing more activities focused on member welfare, such as career orientations and seminars, despite challenges affecting organizational functionality. She also hopes for opportunities to foster camaraderie among Computer Science students through gatherings involving all year levels and block sections.";
}
function changeDetails6(){
document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA TREASURER.png";
document.getElementById("position").innerHTML = "TREASURER";
document.getElementById("name").innerHTML = "Francia Mae T. Mercado";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Francia Mae T. Mercado, a first-year student in the Bachelor of Science in Computer Science program, specifically in class 1-E1, currently serves as the Treasurer in TIPA. While facing minimal challenges within the organization, primarily related to scheduling conflicts during late meetings, she anticipates fostering greater organizational efficiency and structure moving forward.";
}
function changeDetails7(){
document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA AUDITOR.png";
document.getElementById("position").innerHTML = "AUDITOR";
document.getElementById("name").innerHTML = "Lovely Joy Bautista";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lovely Joy A. Bautista is currently enrolled in class II-E1 and holds the position of Auditor in the Technology Innovators through Programming and Algorithm Sciences (TIPA) for this academic year. She has been an active member of TIPA in the past. Viewing her responsibilities as an officer as opportunities for personal growth, Lovely has refined her time management skills, improved her social engagement, and developed various competencies. As she looks forward to the upcoming year, Lovely is eager to strengthen connections with fellow officers, faculty members, and organization members within and outside the University of Rizal System Morong. She seeks to explore new opportunities and experiences that will broaden her perspective.";
}
function changeDetails8(){
document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA BUSINESS MANAGER.png ";
document.getElementById("position").innerHTML = "BUSINESS MANAGER";
document.getElementById("name").innerHTML = "Paulene R. Denajeba";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Paulene R. Denajeba, currently in her second year in class 2-E, holds the position of Business Manager in TIPA and previously served as the First Year Representative. She has identified the challenge of insufficient funds within the organization and advocates for increased budget allocation to facilitate the execution of more activities.";
}
function changeDetails9(){
document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA PIO 1.png";
document.getElementById("position").innerHTML = "PUBLIC INFORMATION OFFICER";
document.getElementById("name").innerHTML = "Andrews Matienzo";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Andrews Leeo Melendres Matienzo, a second-year Bachelor of Science in Computer Science student in class 2-E, serves as the Public Information Officer and Layout Artist for TIPA. Challenges within TIPA include a shortage of personnel and the need for additional committees representing each year level";
}
function changeDetails10(){
document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA PIO 2.png";
document.getElementById("position").innerHTML = "PUBLIC INFORMATION OFFICER";
document.getElementById("name").innerHTML = "Von Adrian Colarina";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Von Adrian Colarina, a 3rd year Bachelor of Science in Computer Science student in class 3-E2, serves as the Public Information Officer and Layout Artist for TIPA. Challenges within TIPA include a shortage of personnel and the need for additional committees representing each year level";
}
function changeDetails11(){
document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA TAMS CHAIRPERSON.png";
document.getElementById("position").innerHTML = "TAMS CHAIRPERSON";
document.getElementById("name").innerHTML = "Jimboy Baguio";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jimboy Baguio, a third-year Bachelor of Science in Computer Science student in class 3-E1, holds the position of Tech and Media Support Co-Chairperson. He does not hold any former positions within the organization.";
}
function changeDetails12(){
document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA TAMS CO-CHAIRPERSON.png";
document.getElementById("position").innerHTML = "TAMS CO-CHAIRPERSON";
document.getElementById("name").innerHTML = "Rhaf John Chualong";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rhaf John Chualong, a third-year Bachelor of Science in Computer Science student in class 3-E2, holds the position of Tech and Media Support Co-Chairperson. He does not hold any former positions within the organization.";
}
function changeDetails13(){
document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA 1ST YEAR REP.png";
document.getElementById("position").innerHTML = "1ST YEAR REPRESENTATIVE";
document.getElementById("name").innerHTML = "Stefanie Sesuca";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stefanie Sorell Maghuyop Sesuca, representing class I-E1, currently serves as the First Year Representative in TIPA. She is adjusting to the responsibilities of her role and strives to adapt to fulfill her duties effectively. Looking ahead, Stefanie looks forward to participating in more activities led by TIPA to enhance engagement and foster a sense of community among Computer Science students.";
}
function changeDetails14(){
document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA 2ND YEAR REP.png";
document.getElementById("position").innerHTML = "2ND YEAR REPRESENTATIVE";
document.getElementById("name").innerHTML = "Kerk Nialda";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kerk Dan C. Nialda, a second-year Bachelor of Science in Computer Science student enrolled in class 2-E2, serves as both the 2nd Year Representative and Business Manager in TIPA. Throughout his tenure as a TIPA officer since the first year, challenges have arisen, notably delays in proposal approvals leading to event timing issues and insufficient funds. He looks forward to implementing improvements, including hosting a well-organized General Assembly and conducting seminar events.";
}
function changeDetails15(){
document.getElementById("photo").src = "../IMAGES/TIPA Images/TIPA 3RD YEAR REP.png";
document.getElementById("position").innerHTML = "3RD YEAR REPRESENTATIVE";
document.getElementById("name").innerHTML = "John Michael Aguirre";
document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;John Michael Aguirre, a third-year student pursuing a Bachelor of Science in Computer Science and enrolled in class 3E2, currently holds the position of 3rd Representative in TIPA. This marks his inaugural experience in an organization, and he finds it to be a rewarding new venture. Demonstrating active involvement, Michael diligently contributes to meetings and communication within TIPA, striving to provide optimal solutions and plan engaging activities. He aspires for TIPA to continually improve its organization and functionality with each passing year.";
}