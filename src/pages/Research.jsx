import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import research1pic1 from "../assets/research1pic1.gif";
import research1pic2 from "../assets/research1pic2.gif";
import research2pic1 from "../assets/research2pic1.gif";
import research2pic2 from "../assets/research2pic2.jpg";
import research2pic3 from "../assets/research2pic3.jpg";
import research3pic1 from "../assets/research3pic1.jpg";
import research3pic2 from "../assets/research3pic2.jpg";
import research3pic3 from "../assets/research3pic3.jpg";
import research4pic1 from "../assets/research4pic1.gif";
import research4pic2 from "../assets/research4pic2.jpg";
import research5pic1 from "../assets/research5pic1.gif";
import research5pic2 from "../assets/research5pic2.gif";
import research5pic3 from "../assets/research5pic3.gif";
export default function Research() {
  return (
    <div className="h-full pt-28 lg:pt-32 px-5 lg:px-28">
      <div className="text-left lg:items-center lg:mb-10">
        <h1 className="text-3xl text-center lg:text-left font-bold px-8 py-2">
          Research Works
        </h1>
        <div className="py-10 lg:ml-10 lg:mr-10">
          <ul className="flex flex-col gap-2 lg:gap-3 lg:text-lg">
            <li className="shadow-gray-500 shadow-lg pt-2">
              <div className="text-3xl font-bold p-2  md:ml-5 underline decoration-solid text-center md:text-start">
                Computational Oncology and Drug Delivery
              </div>
              <div className="mt-5">
                <div className="  flex flex-col md:flex-row gap-2 items-center">
                  <div className="flex justify-center md:w-2/5">
                    <img
                      src={research1pic2}
                      alt="research1pic2"
                      className="rounded-lg transition duration-500 h-[200px] w-[250px] md:h-72 md:w-96"
                    />
                  </div>
                  <div className="pt-2 md:w-3/5">
                    <p className="px-4">
                      Computational oncology as an integrative discipline
                      incorporates computational fluid dynamics (CFD) knowledge
                      to further the understanding of the cancer environment
                      non-invasively. In this regard, we at Biofluids Research
                      Lab are developing an open-source computational graphical
                      user interface (GUI) to predict the hydraulic environment,
                      drug transport (irrespective of any treatment and drug
                      administration mode) in the heterogeneous tumor
                      microenvironment, and the associated cancer healing.
                      Additionally, to make patient-specific predictions, the
                      computational models are reinforced with real-time medical
                      imaging data (Dynamic Magnetic Resonance Imaging (MRI))
                      that help the oncologists use these tools to improve
                      prognosis, survival, and patient quality of life. This
                      helps the oncologists to optimize their surgical planning
                      beforehand.
                    </p>
                  </div>
                </div>
                <div className="  flex flex-col md:flex-row-reverse gap-2 items-center py-2">
                  <div className="flex justify-center md:w-2/5">
                    <img
                      src={research1pic1}
                      alt="research1pic2"
                      className="rounded-lg transition duration-500 h-[200px] w-[250px] md:h-72 md:w-96"
                    />
                  </div>
                  <div className="pt-2 md:w-3/5">
                    <p className="px-4">
                      Till now the GUI has been used to predict the transport of
                      intravenously administered contrast agents (
                      <a
                        href="https://www.sciencedirect.com/science/article/pii/S0021929017302737"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        Access Link
                      </a>
                      ), free chemotherapeutic drugs (
                      <a
                        href="https://www.sciencedirect.com/science/article/pii/S002628621830164X"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        Access Link
                      </a>
                      ), Liposome encapsulated drugs (
                      <a
                        href="https://ieeexplore.ieee.org/abstract/document/8003440"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        Access Link1
                      </a>
                      ,{" "}
                      <a
                        href="https://asmedigitalcollection.asme.org/biomechanical/article-abstract/140/5/051010/422050/Numerical-Study-of-Transport-of-Anticancer-Drugs?redirectedFrom=fulltext"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        Access Link2
                      </a>
                      ), and thermosensitive liposomes{" "}
                      <a
                        href="https://www.sciencedirect.com/science/article/pii/S1290072923003824?dgcid=author"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        (Access Link)
                      </a>{" "}
                      routinely used for the treatment of human brain tumours.
                      In addition to systemic administration, the GUI is also
                      capable to simulate convection enhanced drug delivery mode
                      in glioblastomas (
                      <a
                        href="https://www.mdpi.com/2072-6694/14/17/4177"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        Access Link
                      </a>
                      ).
                    </p>
                    <p className="px-4 text-blue-900 font-semibold">
                      Softwares used: OpenFOAM, MATLAB.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="shadow-gray-500 shadow-lg pt-2">
              <div className="text-3xl font-bold p-2  md:ml-5 underline decoration-solid text-center md:text-start">
                Retinal Hemodynamics: In Vitro Investigation
              </div>
              <div className="mt-5">
                <div className="  flex flex-col md:flex-row gap-2 items-center">
                  <div className="flex flex-col justify-center md:w-2/5 items-center">
                    <img
                      src={research2pic2}
                      alt="research2pic2"
                      className="rounded-lg transition duration-500 h-[70px] w-[250px] md:h-28 md:w-96"
                    />
                    <img
                      src={research2pic1}
                      alt="research2pic1"
                      className="rounded-lg transition duration-500 h-[150px] w-[250px] md:h-48 md:w-96"
                    />
                  </div>
                  <div className="pt-2 md:w-3/5">
                    <p className="px-4">
                      Arterial tortuosity is one of the noticeable features of
                      the diabetic artery. Significant changes in the flow
                      patterns occur at the artery's tortuous region, making
                      these regions susceptible to different vascular damages.
                      We at Biofluids Research Lab are investigating the effect
                      of tortuosity variations on hemodynamics through particle
                      streak velocimetry (PSV) experiments. Since low-wall shear
                      stress (WSS) is a well-accepted hemodynamic parameter for
                      atherosclerosis, the WSS is correlated with the tortuosity
                      index, which can be considered a geometrical marker for
                      identifying low shear zones{" "}
                      <a
                        href="https://pubs.aip.org/aip/pof/article/36/1/011912/3061594/Delineating-the-effects-of-morphological-changes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        Access Link
                      </a>
                    </p>
                  </div>
                </div>
                <div className="  flex flex-col md:flex-row-reverse gap-2 items-center py-4">
                  <div className="flex justify-center md:w-2/5">
                    <img
                      src={research2pic3}
                      alt="research2pic3"
                      className="rounded-lg transition duration-500 h-[150px] w-[250px] md:h-48 md:w-96"
                    />
                  </div>
                  <div className="pt-2 md:w-3/5">
                    <p className="px-4 text-red-700 font-semibold">
                      Equipments name in figure
                    </p>
                    <div className="px-4 md:px-10 flex flex-col md:flex-row justify-between text-blue-950">
                      <div className="">
                        <ul>
                          <li>&nbsp;1. Syringe pump</li>
                          <li>&nbsp;2. Syringe</li>
                          <li>&nbsp;3. High-speed camera</li>
                          <li>&nbsp;4. Laser</li>
                          <li>&nbsp;5. LED bulb</li>
                          <li>&nbsp;6. Breadboard Table</li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li>&nbsp;7. Retinal artery with guide</li>
                          <li>&nbsp;8. Laptop for data acquisition</li>
                          <li>&nbsp;9. Laser 2 with lab jack</li>
                          <li>10. Laser stand</li>
                          <li>11. Tripod </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="shadow-gray-500 shadow-lg pt-2">
              <div className="text-3xl font-bold p-2  md:ml-5 underline decoration-solid text-center md:text-start">
                Multiscale modeling of hemodynamics and biomechanics in human
                retina
              </div>
              <div className="mt-5">
                <div className="  flex flex-col md:flex-row gap-2 items-center">
                  <div className="flex justify-center md:w-2/5">
                    <img
                      src={research3pic1}
                      alt="research3pic1"
                      className="rounded-lg h-[200px] w-[250px] md:h-80 md:w-auto"
                    />
                  </div>
                  <div className="pt-2 md:w-3/5">
                    <p className="px-4">
                      The retina is an integral part of the posterior human eye
                      and is susceptible to many diseases, such as diabetes and
                      hypertension. Different alterations in the retina's
                      vascular architecture occur due to these diseases that
                      change the retina's blood flow and oxygen transport. To
                      this end, we at Biofluids Research Lab are investigating
                      how these alterations in the vascular topology lead to
                      changes in the retinal hemodynamic and biomechanics
                      behavior. To accomplish this, the patient-specific
                      geometries of detailed retinal microvasculature are
                      extracted from Fundus and Optical coherence tomography
                      angiography (OCTA) imaging. Detailed 3D CFD and
                      Fluid-structure interaction (FSI) simulations of healthy
                      and diabetic retinal blood vessels (both artery and veins)
                      are carried out, which result in the identification of
                      abnormalities regions, such as vascular damage and
                      atherosclerosis spotted, to help ophthalmologists find
                      potential areas for the formation of microaneurysms{" "}
                      <a
                        href="https://www.sciencedirect.com/science/article/pii/S0026286223001206"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        Access Link
                      </a>
                    </p>
                    <p className="px-4 text-blue-900 font-semibold">
                      Softwares used: Inventor, Ansys Fluent, Static Structural.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between mx-2 md:mx-20 pt-10 pb-2 gap-2">
                  <div className="border-2 border-black rounded-lg p-1">
                    <img
                      src={research3pic2}
                      alt="research3pic2"
                      className="h-[200px] w-[250px] md:h-80 md:w-96"
                    />
                    <p className="text-center">Results for Artery</p>
                  </div>
                  <div className="border-2 border-black rounded-lg p-1">
                    <img
                      src={research3pic3}
                      alt="research3pic3"
                      className="h-[200px] w-[250px] md:h-80 md:w-96"
                    />
                    <p className="text-center">Results for Vein</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="shadow-gray-500 shadow-lg pt-2">
              <div className="text-3xl font-bold p-2  md:ml-5 underline decoration-solid text-center md:text-start">
              Targeted drug delivery inside the human nasal cavity
              </div>
              <div className="mt-5">
                <div className="  flex flex-col md:flex-row gap-2 items-center">
                  <div className="flex justify-center md:w-2/5">
                    <img
                      src={research4pic1}
                      alt="research4pic1"
                      className="rounded-lg transition duration-500 h-[200px] w-[250px] md:h-64 md:w-96"
                    />
                  </div>
                  <div className="pt-2 md:w-3/5">
                    <p className="px-4">
                      The transport of the drug to the affected regions in the
                      nasal cavity is challenging due to its intricate
                      anatomical structure. The deposition mechanisms for
                      smaller particles are attributed to diffusion. On the
                      contrary, inertial impaction dominates larger ones. Many
                      parameters affect the drug trajectory, including
                      patient-specificity, administration technique, device
                      type, and atomization techniques
                    </p>
                  </div>
                </div>
                <div className="  flex flex-col md:flex-row-reverse gap-2 items-center py-2">
                  <div className="flex justify-center md:w-2/5">
                    <img
                      src={research4pic2}
                      alt="research4pic2"
                      className="rounded-lg transition duration-500 h-[200px] w-[250px] md:h-64 md:w-96"
                    />
                  </div>
                  <div className="pt-2 md:w-3/5">
                    <p className="px-4">
                      In the Biofluids Research Lab, we are trying to achieve
                      some optimum parameters for improving the patient-specific
                      targeted drug delivery by conducting detailed
                      computational fluid and particle dynamics investigations
                      on different nasal anatomies.
                    </p>
                    <p className="px-4 text-blue-900 font-semibold">
                      Softwares used: 3D Slicer, Ansys ICEM-CFD, Ansys Fluent.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="shadow-gray-500 shadow-lg pt-2">
              <div className="text-3xl font-bold p-2  md:ml-5 underline decoration-solid text-center md:text-start">
                Enhancement of the septoplasty’s success rate by heat and mass
                transfer analysis
              </div>
              <div className="mt-5">
                <div className="  flex flex-col md:flex-row gap-2 items-center">
                  <div className="flex justify-center md:w-2/5">
                    <img
                      src={research5pic1}
                      alt="research5pic1"
                      className="rounded-lg h-[200px] w-[250px] md:h-64 md:w-96"
                    />
                  </div>
                  <div className="pt-2 md:w-3/5">
                    <p className="px-4">
                      The deviated nasal septum, a condition characterized by
                      the displacement of the nasal septum, often results in
                      partial blockage of the nasal cavity. Septoplasty, a
                      commonly performed surgical intervention, aims to correct
                      this deviation. However, its success rates have been
                      reported as low as 50%. Patient selection plays a crucial
                      role in enhancing the efficacy of septoplasty. When the
                      patient undergoes septal surgery, the airflow patterns,
                      heat, and mass transfer alter. At Biofluids Research Lab,
                      we are exploring these alterations using computational
                      fluid dynamics (CFD) and virtual surgery techniques to
                      develop criteria for selecting potential septoplasty
                      patients and the effectiveness of the septoplasty.
                    </p>
                    <p className="px-4 text-blue-900 font-semibold">
                      Softwares used: 3D Slicer, Ansys ICEM-CFD, Ansys Fluent.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between mx-2 md:mx-20 pt-10 pb-2 gap-2">
                  <div className="border-2 border-black rounded-lg p-1">
                    <img
                      src={research5pic2}
                      alt="research5pic2"
                      className="h-[200px] w-[250px] md:h-80 md:w-96"
                    />
                    <p className="text-center font-semibold">Deviated</p>
                  </div>
                  <div className="border-2 border-black rounded-lg p-1">
                    <img
                      src={research5pic3}
                      alt="research5pic3"
                      className="h-[200px] w-[250px] md:h-80 md:w-96"
                    />
                    <p className="text-center font-semibold">Corrected</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
