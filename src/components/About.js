import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

export function About() {
  return (
    <Carousel fade style={{display:"flex",flexWrap:"wrap"}}>
      <Carousel.Item>
        <Image
          src="https://blog.architizer.com/wp-content/uploads/Untitled-1-14.png"
          width={1600}
          height={500}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://www.globalcareercounsellor.com/blog/wp-content/uploads/2021/03/Things-You-Must-Know-About-Architecture-Interior-Design-Civil-Engineering.jpg"
          width={1600}
          height={500}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://images.theconversation.com/files/121885/original/image-20160510-20731-1pf8nwv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
          width={1600}
          height={500}
        />
      </Carousel.Item>
    </Carousel>
  );
}
