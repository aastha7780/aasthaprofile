%
% Academic CV LaTeX Template
% Author: Dubasi Pavan Kumar
%

\documentclass[a4paper,11pt]{article}

% Package imports
\usepackage{latexsym}
\usepackage{xcolor}
\usepackage{float}
\usepackage{ragged2e}
\usepackage[empty]{fullpage}
\usepackage{wrapfig}
\usepackage{lipsum}
\usepackage{tabularx}
\usepackage{titlesec}
\usepackage{geometry}
\usepackage{marvosym}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage{fancyhdr}
\usepackage{multicol}
\usepackage{graphicx}
\usepackage{cfr-lm}
\usepackage[T1]{fontenc}
\usepackage{fontawesome5}

% Color definitions
\definecolor{darkblue}{RGB}{0,0,139}
\definecolor{Cyan}{RGB}{0,139,139}  % Added Cyan color

% Page layout
\setlength{\multicolsep}{0pt} 
\pagestyle{fancy}
\fancyhf{}
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}
\geometry{left=1.4cm, top=0.8cm, right=1.2cm, bottom=1cm}
\setlength{\footskip}{5pt}

% Hyperlink setup
\usepackage[hidelinks]{hyperref}
\hypersetup{
    colorlinks=true,
    linkcolor=darkblue,
    filecolor=darkblue,
    urlcolor=darkblue,
}

% Custom box settings
\usepackage[most]{tcolorbox}
\tcbset{
    frame code={},
    center title,
    left=0pt,
    right=0pt,
    top=0pt,
    bottom=0pt,
    colback=gray!20,
    colframe=white,
    width=\dimexpr\textwidth\relax,
    enlarge left by=-2mm,
    boxsep=4pt,
    arc=0pt,outer arc=0pt,
}

% URL style
\urlstyle{same}

% Text alignment
\raggedright
\setlength{\tabcolsep}{0in}

% Section formatting
\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-7pt}]

% Custom commands
\newcommand{\resumeItem}[2]{
  \item{
    \textbf{#1}{\hspace{0.5mm}#2 \vspace{-0.5mm}}
  }
}

\newcommand{\resumePOR}[3]{
\vspace{0.5mm}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1}\hspace{0.3mm}#2 & \textit{\small{#3}} 
    \end{tabular*}
    \vspace{-2mm}
}

\newcommand{\resumeSubheading}[4]{
\vspace{0.5mm}\item
    \begin{tabular*}{0.98\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1} & \textit{\footnotesize{#4}} \\
        \textit{\footnotesize{#3}} &  \footnotesize{#2}\\
    \end{tabular*}
    \vspace{-2.4mm}
}

\newcommand{\resumeProject}[4]{
\vspace{0.5mm}\item
    \begin{tabular*}{0.98\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1} & \textit{\footnotesize{#3}} \\
        \footnotesize{\textit{#2}} & \footnotesize{#4}
    \end{tabular*}
    \vspace{-2.4mm}
}

\newcommand{\resumeSubItem}[2]{\resumeItem{#1}{#2}\vspace{-4pt}}

\renewcommand{\labelitemi}{$\vcenter{\hbox{\tiny$\bullet$}}$}
\renewcommand{\labelitemii}{$\vcenter{\hbox{\tiny$\circ$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=*,labelsep=1mm]}
\newcommand{\resumeHeadingSkillStart}{\begin{itemize}[leftmargin=*,itemsep=1.7mm, rightmargin=2ex]}
\newcommand{\resumeItemListStart}{\begin{itemize}[leftmargin=*,labelsep=1mm,itemsep=0.5mm]}

\newcommand{\resumeSubHeadingListEnd}{\end{itemize}\vspace{2mm}}
\newcommand{\resumeHeadingSkillEnd}{\end{itemize}\vspace{-2mm}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-2mm}}
\newcommand{\cvsection}[1]{%
\vspace{2mm}
\begin{tcolorbox}
    \textbf{\large #1}
\end{tcolorbox}
    \vspace{-4mm}
}

\newcolumntype{L}{>{\raggedright\arraybackslash}X}%
\newcolumntype{R}{>{\raggedleft\arraybackslash}X}%
\newcolumntype{C}{>{\centering\arraybackslash}X}%

% Commands for icon sizing and positioning
\newcommand{\socialicon}[1]{\raisebox{-0.05em}{\resizebox{!}{1em}{#1}}}
\newcommand{\ieeeicon}[1]{\raisebox{-0.3em}{\resizebox{!}{1.3em}{#1}}}

% Font options
\newcommand{\headerfonti}{\fontfamily{phv}\selectfont}
\newcommand{\headerfontii}{\fontfamily{ptm}\selectfont}
\newcommand{\headerfontiii}{\fontfamily{ppl}\selectfont}
\newcommand{\headerfontiv}{\fontfamily{pbk}\selectfont}
\newcommand{\headerfontv}{\fontfamily{pag}\selectfont}
\newcommand{\headerfontvi}{\fontfamily{cmss}\selectfont}
\newcommand{\headerfontvii}{\fontfamily{qhv}\selectfont}
\newcommand{\headerfontviii}{\fontfamily{qpl}\selectfont}
\newcommand{\headerfontix}{\fontfamily{qtm}\selectfont}
\newcommand{\headerfontx}{\fontfamily{bch}\selectfont}

\begin{document}
\headerfontiii

% Header
\begin{center}
    {\Huge\textbf{Aastha Tripathi}}
\end{center}
\vspace{-6mm}

\begin{center}
    \small{
     \href{tel:9565410616}{9565410616} | \href{tel:8755151701}{8755151701} | \href{mailto:taastha295@gmail.com}{taastha295@gmail.com} | 
    \href{https://celadon-halva-1280a0.netlify.app/}{Aasthawebsite.com}
    
    }
\end{center}
\vspace{-6mm}

\begin{center}
    \small{
    \socialicon{\faLinkedin} \href{https://www.linkedin.com/in/aastha-tripathi-975a39308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app}{Linkedin} | 
    \socialicon{\faGithub} \href{https://github.com/aastha7780}{Github}
    }
\end{center}
\vspace{-6mm}
\begin{center}
    \small{Katya,Basti,India, U.P}
\end{center}

\vspace{-4mm}

\section{\color{Cyan}{Objective}}
\vspace{1mm}
\small{
I'm Aastha, an aspiring Frontend Developer and Python enthusiast. I'm
									currently in my final year of a Diploma in Information Technology at Government
									Girls Polytechnic, Ayodhya. I'm passionate about creating responsive, user-friendly
									web applications and continuously expanding my skills in Python and frontend
									technologies.
}
\vspace{-2mm}

\section{\color{Cyan}{Education}}
\vspace{-0.4mm}
\resumeSubHeadingListStart

\resumeSubheading
{Government girls polytechnic Ayodhya.}
{Ayodhya, U.P}
{Information Technology}{2022 - 2025}
\resumeItemListStart
\item Appearing
\resumeItemListEnd

\resumeSubheading
{Gautam Buddh Murali Devi Balika Gotwa}{Basti}
{Pre-University Education}{2021}
\resumeItemListStart
\item Percentage: 81.6\%
\resumeItemListEnd

\resumeSubheading
{Gautam Buddh Murali Devi Balika Gotwa}{ Basti}
{Secondary Education}{2019}
\resumeItemListStart
\item Percentage: 76.5\%
\resumeItemListEnd

\resumeSubHeadingListEnd
\vspace{-6mm}

\section{\color{Cyan}{Skills}}
\vspace{-0.4mm}
\resumeHeadingSkillStart
  \resumeSubItem{Front-End Development:}
    {HTML, CSS, React.js, Tailwind CSS, Material-UI}
  \resumeSubItem{Back-End Development:}
    {Python, Node.js, REST API}
  \resumeSubItem{Database Systems:}
    {MySQL, PostgreSQL}
  \resumeSubItem{Developer Tools:}
    {Git, GitHub}
  \resumeSubItem{Other Skills:}
    {C,Bootstrap, React Query, Next.js}
  \resumeSubItem{Soft Skills:}
    {Teamwork, Communication, Problem-Solving, Time Management}
  \resumeSubItem{Languages:}
    {Hindi, English}
\resumeHeadingSkillEnd

\section{\color{Cyan}{Projects}}
\vspace{-0.4mm}
\resumeSubHeadingListStart

\resumeProject
  {Landing-Page}
  {Tools: [ HTML, CSS, JavaScript]}
  {2025}
  {[\href{https://visionary-rabanadas-4a0dfa.netlify.app/}{\textcolor{darkblue}{\faIcon{globe}}}]}
\resumeItemListStart
  \item Developed a responsive landing website using HTML, CSS, and JavaScript to highlight popular tourist destinations.
  \item Implemented interactive destination cards with hover effects and smooth scrolling for better user engagement.
  \item Added dynamic filtering by location to allow users to explore destinations efficiently.
  \item Utilized CSS Flexbox and Grid to ensure a clean, adaptive layout across all screen sizes.

\resumeItemListEnd

\resumeProject
  {South-Slave-Shore-National-Park}
  {Tools: [React,CSS,JavaScript,API]}
  {2024}
  {[\href{https://south-slave-shore-national-git-25861d-aasthas-projects-780b31c8.vercel.app/}{\textcolor{darkblue}{\faIcon{globe}}}]}
\resumeItemListStart
  \item Built a responsive tourism website using React, CSS, JavaScript, and Bootstrap to showcase South Slave Shore National Park.
  \item Highlighted park features with dynamic image galleries and interactive elements for an immersive user experience.
  \item Utilized Bootstrap's grid and components to ensure consistent performance across all devices and screen sizes.
  \item Integrated JavaScript functionalities to improve engagement through smooth interactions and real-time content updates.
  \item Designed a visually appealing UI that reflects the park’s natural beauty, enhancing user retention and accessibility.
  
\resumeItemListEnd

\resumeProject
  {Movies-Website}
  {Tools: [HTML, CSS, JavaScript,API]}
  {2023}
  {[\href{https://movies-website-git-master-aasthas-projects-780b31c8.vercel.app/}{\textcolor{darkblue}{\faIcon{globe}}}]}
\resumeItemListStart
  \item Integrated real-time movie data APIs to display trending titles, ratings, genres, and trailers dynamically.
  \item Implemented search functionality and dynamic content rendering without page reloads using JavaScript and async API calls.
  \item Utilized Bootstrap components for a clean, user-friendly interface across all device sizes.
  \item Enhanced user engagement through interactive features and smooth UI transitions for a seamless browsing .
  \item Ensured cross-browser compatibility and optimized performance, resulting in faster load times and an improved user experience across platforms.
  \vspace{-6mm}
\resumeItemListEnd

\resumeSubHeadingListEnd

\section{\color{Cyan}{Certificates \& Achievements}}
\vspace{-0.5mm}
\resumeHeadingSkillStart
 \resumeSubItem{Communication Skills Training:}
    {Completed 15 days of professional communication skills training at Mahindra Company}
 \resumeSubItem{Summer Internship:}
    {Completed 45-day live project-oriented internship at Kamadgiri Software Solutions Pvt. Ltd., Chitrakoot}

\resumeHeadingSkillEnd

\end{document}
