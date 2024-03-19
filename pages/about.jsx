import Image from "next/image";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Layout from "../src/components/Layout";

// icons
import { SiSass, SiBootstrap, SiJavascript, SiTypescript, SiTailwindcss, SiReact, SiNextdotjs, SiVuedotjs, SiPhp, SiNodedotjs, SiExpress, SiCodeigniter, SiLaravel, SiMysql, SiMongodb } from "react-icons/si";

// custom styles
import styles from "../styles/About.module.scss";

export default function About() {
  const skillIcons = [
    { name: "SASS", icon: <SiSass color="#CC6699" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "Javascript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "Typescript", icon: <SiTypescript color="#3178C6" /> },
    { name: "React", icon: <SiReact color="#61DAFB" /> },
    { name: "NextJS", icon: <SiNextdotjs color="#000000" /> },
    { name: "Vue", icon: <SiVuedotjs color="#4FC08D" /> },
  ];

  const familiarIcons = [
    { name: "PHP", icon: <SiPhp color="#777BB4" /> },
    { name: "NodeJS", icon: <SiNodedotjs color="#339933" /> },
    { name: "ExpressJS", icon: <SiExpress color="#000000" /> },
    { name: "Codeigniter", icon: <SiCodeigniter color="#EF4223" /> },
    { name: "Laravel", icon: <SiLaravel color="#FF2D20" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  ];

  return (
    <Layout title="About Me">
      <Container fluid>
        <div className={styles.subcontainer}>
          <Row className="w-100">
            <Col md={12}>
              <h1 className="text-light text-start active-link">About Me</h1>
            </Col>
          </Row>
          <Row className="my-4">
            <Col md={12} style={{ textAlign: "justify", paddingLeft: "24px", paddingRight: "24px" }}>
              <p className="card-text text-white">Hello, my name is Akhsan Bayu Riantama, you can call me Akhsan. I live in Magelang, Central Java, Indonesia</p>
              <p className="card-text text-white">
                I had studied programming while in college, and decided to further develop my programming skills, joining many programming Frontend bootcamps. I have over 2 working years of working experience in IT Industries with tech stack Vue.JS, React.JS, & Laravel. I am deeply passionate about <span className="text-info">crafting clean code & slicing UI/ UX design</span> . My goal career is to build high quality code, clean architecture, & creating beautiful responsive UI/UX design for any application.
              </p>
            </Col>
          </Row>
          <Row className="w-100" style={{ rowGap: "1rem" }}>
            <Col md={6}>
              <p className="text-white fs-5 fw-bold mb-1 active-link">Frontend Skills</p>
              <p className="text-white">I was learn some skill of FrontEnd about more than 2 years. But im always try to improve my self by learning everyday.</p>
              <div className="p-3 text-center bg-secondary rounded-3">
                <Row>
                  {skillIcons.map((item, i) => (
                    <Col key={i} lg={2} xs={4}>
                      <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-bottom">{item.name}</Tooltip>}>
                        <i className="text-white fs-3">{item.icon}</i>
                      </OverlayTrigger>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <p className="text-white fs-5 fw-bold mb-1 active-link">Backend Skills</p>
              <p className="text-white">Besides frontend skills, I also sometimes try some backend technology and im always use it</p>
              <div className="p-3 text-center bg-secondary rounded-3">
                <Row>
                  {familiarIcons.map((item, i) => (
                    <Col key={i} lg={2} xs={4}>
                      <OverlayTrigger key={i} placement="bottom" overlay={<Tooltip id="tooltip-bottom">{item.name}</Tooltip>}>
                        <i className="text-white fs-3">{item.icon}</i>
                      </OverlayTrigger>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
}
