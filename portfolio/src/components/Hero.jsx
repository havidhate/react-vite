import profile from "../assets/hutesh-photo.jpg";

const Hero = () => (
  <section id="home">
    <h1>Hello, I'm Hutesh</h1>
    <img src={profile} alt="Hutesh" className="profile-pic" />
    <p>A passionate MERN stack developer aiming to create impact with code.</p>
  </section>
);

export default Hero;
