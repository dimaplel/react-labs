import "./about.scss"
import profileImage from '../../assets/profile.jpg';

export const About = () => {
    return (
        <section className="about container">
            <h1 className="about_title">About Me</h1>
            <div className="about_contents">
                <img src={profileImage} alt="Profile" className="about_photo" />
                <h2 className="about_header">Hi, I'm Dmytro Ivanenko, Python developer and future Data Scientist</h2>
                <p className="about_paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Cursus metus aliquam eleifend mi 
                    in nulla posuere. Posuere ac ut consequat semper. Cras sed felis eget velit 
                    aliquet. Posuere urna nec tincidunt praesent semper. Pretium nibh ipsum 
                    consequat nisl. Odio tempor orci dapibus ultrices in. In hac habitasse platea 
                    dictumst quisque sagittis purus sit amet. Aliquet lectus proin nibh nisl 
                    condimentum. In ornare quam viverra orci sagittis eu volutpat odio facilisis.
                     
                    Sit amet consectetur adipiscing elit ut. Eget sit amet tellus cras adipiscing 
                    enim eu. Diam donec adipiscing tristique risus nec feugiat in fermentum. 
                    Mauris a diam maecenas sed enim ut sem viverra aliquet. Viverra tellus 
                    in hac habitasse platea dictumst vestibulum rhoncus. Ac ut consequat semper 
                    viverra nam libero. Sem et tortor consequat id porta nibh venenatis cras. 
                    Donec enim diam vulputate ut pharetra sit amet aliquam id. Viverra adipiscing 
                    at in tellus integer feugiat scelerisque varius morbi. Faucibus et molestie ac 
                    feugiat sed lectus. Nulla at volutpat diam ut venenatis tellus in metus. Sed 
                    egestas egestas fringilla phasellus faucibus scelerisque eleifend. Blandit aliquam 
                    etiam erat velit scelerisque in.</p>
            </div>
        </section>
    )
}