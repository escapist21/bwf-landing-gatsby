import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import 'react-tabs/style/react-tabs.css'
import KishanPathshala from "./kishan-pathshala"
import NutritionOnWheel from "./nutrition-on-wheel"
import BetterWorldSchool from "./better-world-school"
import DigitalPitara from "./digital-pitara"

const SolutionDetails = () => {
    return(
    <Tabs className="mb-5">
    <TabList>
      <Tab>Kishan Pathshala</Tab>
      <Tab>Nutrition on Wheel</Tab>
      <Tab>Better World School</Tab>
      <Tab>Digital Pitara</Tab>
      <Tab>Khakhra Production Group</Tab>
    </TabList>

    <TabPanel>
      <KishanPathshala />
    </TabPanel>
    <TabPanel>
      <NutritionOnWheel />
    </TabPanel>
    <TabPanel>
      <BetterWorldSchool />
    </TabPanel>
    <TabPanel>
      <DigitalPitara />
    </TabPanel>
    <TabPanel>
      <p>
      </p>
    </TabPanel>
  </Tabs>
    )
}

// const SolutionDetails = () => {
//     return(
//         <div id="tabs-with-content">
//             <div class="tabs">
//                 <ul>
//                     <li class="is-active"><a>Kishan Pathshala</a></li>
//                     <li><a>Music</a></li>
//                     <li><a>Videos</a></li>
//                     <li><a>Documents</a></li>
//                 </ul>
//             </div>
//             <div >
//                 <section className="tab-content">Kishan Pathshala content</section>
//                 <section className="tab-content">Kishan Pathshala content</section>
//                 <section className="tab-content">Kishan Pathshala content</section>
//                 <section className="tab-content">Kishan Pathshala content</section>
//             </div>

//         </div>
//     )
// }

export default SolutionDetails