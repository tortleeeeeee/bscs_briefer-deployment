var afaculty=1;
        function movePicturefaculty(){
           
            if (afaculty==1) {
                document.getElementById("f1").setAttribute("class", "ref-faculty");
                document.getElementById("f2").setAttribute("class", "ref-faculty");
                document.getElementById("f3").setAttribute("class", "ref-faculty");
                document.getElementById("f4").setAttribute("class", "ref-faculty");
                document.getElementById("initialLayout-faculty").style.background = "transparent";
                document.getElementById("initialLayout-faculty").setAttribute("class", "newLayout-faculty");
                document.getElementById("deets-faculty").setAttribute("class", "rightpanel-faculty");
                document.getElementById("deets-faculty").style.display="inline";
                document.getElementById("x-faculty").style.display="inline";
                return afaculty=0;
            }
        }

        function exitfaculty(){
            
            if (afaculty==0) {
                document.getElementById("f1").setAttribute("class", "adviser");
                document.getElementById("f2").setAttribute("class", "officers1");
                document.getElementById("f3").setAttribute("class", "officers2");
                document.getElementById("f4").setAttribute("class", "officers3");
                document.getElementById("initialLayout-faculty").style.background = "rgba(1, 13, 70, .8)";
                document.getElementById("initialLayout-faculty").setAttribute("class", "initialLayout-faculty");
                document.getElementById("deets-faculty").removeAttribute("class", "rightpanel-faculty");
                document.getElementById("deets-faculty").style.display="none";
                document.getElementById("x-faculty").style.display="none"

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


                return afaculty=1;
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
        };

        /*Dean*/
        function changeDetails0() {
            document.getElementById("photo").src = "../IMAGES/Faculty Images/COS Dean.png";
            document.getElementById("name").innerHTML = "Dr. Jose E. Binaluyo Jr.";
            document.getElementById("position").innerHTML = "COLLEGE DEAN";
            document.getElementById("education").innerHTML = "educ 1 (0000)<br> educ 2 (0000)<br> educ 3 (0000)"
            document.getElementById("more details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; WAG TANGGALIN YUNG MGA &NBSP"
        }

        /*Sir Mhike*/
        function changeDetails1() {
            document.getElementById("photo").src = "../IMAGES/Faculty Images/Computer Science.png";
            document.getElementById("name").innerHTML = "Michael B. Francisco";
            document.getElementById("position").innerHTML = "PROGRAM HEAD";
            document.getElementById("education").innerHTML = "Bachelor of Science in Information Technology <br> Masteral: Master in Information Techology";
            document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As an IT professor, my primary goal is to equip my students with the skills and mindset necessary for success in the field of computer science. Beyond technical proficiency, I emphasize traits that foster long-term success. Firstly, I value a strong work ethic and dedication to continuous improvement. Success in programming and systems analysis often requires persistence in the face of challenges and a commitment to refining one's skills over time. Additionally, I encourage my students to approach problems with an open mind, exploring innovative solutions and thinking critically about the underlying issues. Effective communication is another key aspect. Clear communication is essential for collaborating with colleagues, understanding client needs, and presenting solutions effectively. ";
        }

        function changeDetails2() {
            document.getElementById("photo").src = "../IMAGES/Faculty Images/Prof. Maria Cecilia.png";
            document.getElementById("name").innerHTML = "Prof. Maria Cecilia P. San Jose";
            document.getElementById("position").innerHTML = "PROFESSOR";
            document.getElementById("education").innerHTML = "<br>Bachelor of Science in Education major in Educational Management <br> Masteral: Master of Arts in Education major in Educational Management <br> Bachelor of Science in Computer Science <br> ";
            document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As a professor, my goal is to teach my  students the knowledge and skills  and help them to  develop their full potential by  providing them a supportive and inclusive classroom environment where they can transform into  competent and well-mannered individuals and To prepare my Students to become competitive and efficient IT Professional";
        }

        function changeDetails3() {
            document.getElementById("photo").src = "../IMAGES/Faculty Images/Prof. Yvette.png";
            document.getElementById("name").innerHTML = "Prof. Yvette S. Garovillas";
            document.getElementById("position").innerHTML = "PROFESSOR";
            document.getElementById("education").innerHTML = "<br>Bachelor of Science in Informational Management <br> Bachelor of Science in Business Administration <br> Doctor of Business Administration";
            document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Certainly. My foremost aspiration for my students is to see them thrive and succeed in their careers in the world of Information Technology. Beyond imparting technical knowledge, I strive to instill in them a mindset of resilience, adaptability, and continuous growth. I want my students to not just excel in their coursework but also to develop a deep understanding of problem-solving methodologies, which they can apply to real-world challenges. Moreover, I emphasize the importance of effective communication skills, both in written and verbal forms. Success in the IT industry often hinges on one's ability to convey complex ideas clearly and collaborate effectively with team members and clients.";
        }

        function changeDetails4() {
            document.getElementById("photo").src = "../IMAGES/Faculty Images/Prof. Lindy.png";
            document.getElementById("name").innerHTML = "Prof. Lindy A. Alejandro";
            document.getElementById("position").innerHTML = "PROFESSOR";
            document.getElementById("education").innerHTML = "<br>Bachelor of Science in Information Technology <br> Masteral: Master in Information Technology";
            document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In the working environment, my aspiration for my students is to see them flourish as successful professionals in the field of computer science. I strive to equip them not only with technical skills but also with the practical knowledge and professional demeanor needed to excel in their careers. My goal is for them to seamlessly integrate into industry settings, where they can contribute meaningfully to projects, collaborate effectively with colleagues, and adapt to the ever-changing demands of the IT landscape. Beyond just securing jobs, I want my students to thrive in their chosen careers, continuously learning, growing, and innovating. Ultimately, I measure my success as a professor by the achievements of my students in their professional lives, and I am committed to providing them with the guidance, support, and resources they need to reach their full potential and become leaders in the field.";
        }

        function changeDetails5() {
            document.getElementById("photo").src = "../IMAGES/Faculty Images/Prof. John.png";
            document.getElementById("name").innerHTML = "Prof. John Emmanuel SJ. Dela Cruz";
            document.getElementById("position").innerHTML = "PROFESSOR";
            document.getElementById("education").innerHTML = "<br>Bachelor of Science in Information Management <br> Masteral: Master of Arts in Teaching"; 
            document.getElementById("more_details").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My aspiration for my students is nothing short of their success and fulfillment in their careers. I envision them not just finding jobs but thriving in them, making significant contributions to their teams and organizations. To achieve this, I emphasize not only technical expertise but also the development of essential soft skills such as communication, problem-solving, and teamwork. I want my students to be confident in their abilities to tackle challenges head-on, to adapt to new technologies and methodologies, and to collaborate effectively with colleagues from diverse backgrounds. Furthermore, I aim to instill in them a lifelong passion for learning and professional development, equipping them with the tools and mindset to stay ahead in the rapidly evolving field of computer science. Ultimately, my greatest satisfaction as a professor comes from seeing my students succeed, and I am committed to providing them with the guidance, mentorship, and support they need to thrive in the dynamic and competitive world of IT.";
        }