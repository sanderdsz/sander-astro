import { Responsive, WidthProvider } from "react-grid-layout";
import Card from "../components/Card";
import { About } from "./About";
import SandersPhoto from "../../public/sander-photo.png";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
  { i: "first", x: 0, y: 0, w: 2, h: 14, minW: 2, maxW: 2 },
  { i: "second", x: 3, y: 0, w: 2, h: 7, minW: 2, maxW: 2 },
  { i: "third", x: 2, y: 1, w: 1, h: 7, minW: 1, maxW: 1 },
  { i: "fourth", x: 3, y: 1, w: 1, h: 7, minW: 1, maxW: 1 },
  { i: "fifth", x: 0, y: 2, w: 1, h: 7, minW: 1, maxW: 1 },
  { i: "sixth", x: 1, y: 2, w: 2, h: 7, minW: 2, maxW: 2 },
  { i: "seventh", x: 3, y: 2, w: 1, h: 7, minW: 1, maxW: 1 },
];

export default function Grid() {
  return (
    <div className="overflow-hidden" style={{ maxWidth: 'calc(100vw - .1rem)', overflow: 'hidden' }}>
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
        cols={{ lg: 4, md: 2, sm: 2, xs: 2 }}
        margin={[0, 0]}
        containerPadding={[0, 0]}
        rowHeight={50}
        isResizable={false}
      >
        <div key="first">
          <Card 
            height="h-[700px]"
            colour="bg-snow-100"
          />
        </div>
        <div key="second">
          <Card
            colour="bg-white-100"
            height="h-[350px]"
            custom="flex items-center justify-center p-12"
          >
            <About />
          </Card>
        </div>
        <div key="third">
          <Card 
            height="h-[350px]"
            colour="bg-github-100"
          />
        </div>
        <div key="fourth">
          <Card 
            height="h-[350px]"
            colour="bg-secondary-100"
            custom="flex items-center justify-center pb-[1px]"
          >
            <img draggable={false} className="h-[350px]" src={SandersPhoto} />
          </Card>
        </div>
        <div key="fifth">
          <Card 
            height="h-[350px]" 
            colour="bg-linkedin-100"
          />
        </div>
        <div key="sixth">
          <Card 
            height="h-[350px]"
            colour="bg-snow-50"
          />
        </div>
        <div key="seventh">
          <Card 
            height="h-[350px]"
            colour="bg-primary-400"
          />
        </div>
      </ResponsiveGridLayout>
    </div>
  )
}