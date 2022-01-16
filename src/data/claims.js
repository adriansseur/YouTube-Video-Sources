export default [
    {
        id: 1,
        clicked: false,
        start: 11,
        end: 30,
        claim: `It seems simple on the surface. Greenhouse gases trap energy from the Sun and transfer it to our atmosphere. This leads to warmer winters, harsher summers. Dry places become drier and wet places wetter. Countless ecosystems will die while the rising oceans swallow coasts and the cities we build on them.`,
        evidence: [
            {
                commentary: `The mechanism of the greenhouse effect is explained succinctly in this NASA page on climate change:`
            },
            {
                source: `The Causes of Climate Change, NASA, retrieved 2021`
            },
            {
                link: `https://climate.nasa.gov/causes/`,
            },
            {
                quote: `Scientists attribute the global warming trend observed since the mid-20th century to the human expansion of the "greenhouse effect" - warming that results when the atmosphere traps heat radiating from Earth toward space. Certain gases in the atmosphere block heat from escaping. Long-lived gases that remain semi-permanently in the atmosphere and do not respond physically or chemically to changes in temperature are described as "forcing" climate change. Gases, such as water vapor, which respond physically or chemically to changes in temperature are seen as "feedbacks."`
            },
            {
                commentary: `All that extra energy being absorbed in the atmosphere manifests itself as more extreme weather events.`
            },
            {
                source: `Changes in Climate Extremes and their Impacts on the Natural Physical Environment, IPCC, 2012`
            },
            {
                link: `https://www.ipcc.ch/site/assets/uploads/2018/03/SREX-Chap3_FINAL-1.pdf `
            },
            {
                quote: `A changing climate leads to changes in the frequency, intensity, spatial extent, duration, and timing of weather and climate extremes, and can result in unprecedented extremes.`
            },
            {
                commentary: `These come in addition to more gradual changes, such as rising sea levels and an increase in average global temperature. Low-lying coastal regions are affected the most, as are places that already experience very high or very low temperatures.`
            }
        ]
    },
    {
        id: 2,
        clicked: false,
        start: 83,
        end: 110,
        claim: "Modern industrial society as we constructed it in the last 150 years, is inherently destructive to the planet. Basically everything we do to make our lives easier, safer and more comfortable is making things worse for the biosphere. The food we eat, the streets we walk on, the clothes we wear, the gadgets we use, the way we move around and the pleasant temperature we artificially create around us.",
        evidence: [
            {
                commentary: `Global greenhouse emissions per person have grown significantly in the past century and a half, with the richest countries showing the greatest increases. For instance, the average person in the United States released 0.82 tons of CO2 in 1850, and 16.16 tons in 2017, with a peak of 22.13 tons in 1973. Following OWID chart demonstrates the change in emissions per country over the last 200 years.`
            },
            {
                source: `Per capita CO2 emissions, OWID, 2021`
            },
            {
                link: `https://ourworldindata.org/co2-emissions#per-capita-co2-emissions `,
            },
            {
                quote: `/images/co-emissions-per-capita.png`
            },
            {
                commentary: `There is a strong link between emissions and standards of living. OWID has a full article explaining what drives the emissions, what is the contribution of different factors and how it is all calculated. There could be other methods but Kaya Identity is one of the well-known metrics. According to it, there are four factors driving emissions: population, income, energy intensity and carbon intensity. Following article explains the breakdown and contribution of each factor in detail. However, one factor that is useful to look at here is the GDP per capita for different countries and how it is related to their emissions. `
            },
            {
                source: `Emissions drivers, OWID`
            },
            {
                link: `https://ourworldindata.org/emissions-drivers`
            },
            {
                quote: `/images/co2-emissions-vs-gdp.png`
            }
        ]
    },
    {
        id: 3,
        clicked: false,
        start: 110,
        end: 124,
        claim: "While most people know about the heavy impact of energy, beef, cars and planes, many major polluters are barely ever talked about. The emissions leaking out of landfills are as significant as the emissions of all the jets in the air. ",
        evidence: [
            {
                commentary: `We are comparing the percentages on the following chart to determine the relative impact of different sources of GHG emissions in CO2 equivalent from 2016 global data. Landfills released 1.9% of global greenhouse emissions. It was similar in proportion to the 1.9% attributed to aviation.`
            },
            {
                source: `Emissions by sector, OWID, 2021`
            },
            {
                link: `https://ourworldindata.org/emissions-by-sector#sector-by-sector-where-do-global-greenhouse-gas-emissions-come-from `,
            },
            {
                quote: `/images/Emissions-by-sector-–-pie-charts.png`
            },
            {
                commentary: `One reason why greenhouse gas emissions from landfills are so significant is because half of their output is in the form of methane, which is much more potent than carbon dioxide. However, methane has a half life of about a decade whereas CO2 can stay up in the atmosphere and accumulate over centuries. `
            },
            {
                source: `United States Environmental Protection Agency, retrieved 2021`
            },
            {
                link: `https://www.epa.gov/lmop/basic-information-about-landfill-gas `
            },
            {
                quote: `Landfill gas (LFG) is a natural byproduct of the decomposition of organic material in landfills. LFG is composed of roughly 50 percent methane (the primary component of natural gas), 50 percent carbon dioxide (CO2) and a small amount of non-methane organic compounds. Methane is a potent greenhouse gas 28 to 36 times more effective than CO2 at trapping heat in the atmosphere over a 100-year period`
            },
            {
                commentary: `A 2018 study presents a new way to use GWP, short for global warming potential, of various greenhouse gases to account for different lifetimes and therefore impact on warming. `
            },
            {
                source: `A new way to assess ‘global warming potential’ of short-lived pollutants, 2018`
            },
            {
                link: `https://www.carbonbrief.org/guest-post-a-new-way-to-assess-global-warming-potential-of-short-lived-pollutants`
            },
            {
                quote: `Greenhouse gas emissions are commonly presented in units of billion tonnes of carbon dioxide equivalent (Gt CO2e). The de facto way of converting non-CO2 emissions to CO2e is to multiply the gas by its GWP100 (global warming potential over 100 years). The value of GWP100 for methane (CH4) from the last IPCC assessment report is 28. This means that methane has 28 times as much “global warming potential” as CO2, so 1Gt CH4 equates to 28 GtCO2e. This masks the fact that 1 GtCH4 has a strong warming influence when it is first emitted, which then diminishes rapidly over a few decades. This is because chemical reactions cause it to be removed from the atmosphere, with a half life of about a decade. So, at the end of that 100 years, that methane is no longer causing strong warming, because it has almost all been destroyed.`
            }
        ]
    },
    {
        id: 4,
        clicked: false,
        start: 124,
        end: 129,
        claim: "More CO2 is released to run our homes than from all cars combined.",
        evidence: [
            {
                commentary: `According to the OWID chart below:`
            },
            {
                commentary: `
                Road transport has caused 11.9% of all greenhouse emissions in 2016, 60% of which was due to the passenger travel with cars, motorcycles and buses whereas the rest was road freight:`
            },

            {
                commentary: ` 
                49.4 billion tonnes CO2 eq x 11.9% = 5.88 billion tonnes CO2 eq.`
            },

            {
                commentary: ` 
                60% passenger travel = 3.53 billion tonnes CO2 eq
                40% road freight = 2.35 billion tonnes CO2 eq`
            },

            {
                commentary: `
                Residential buildings on the other hand accounted for 10.9% with all energy going into generation of electricity for lighting, appliances, cooking etc. and heating at home:`
            },

            {
                commentary: `
                Residential Buildings 49.4 billion tonnes CO2 eq x 10.9% = 5.39 billion tonnes CO2 eq`
            },

            {
                commentary: `
                Therefore, residential buildings caused more emissions compared to passenger travel. `
            },
            {
                source: `Emissions by sector, OWID, 2021`
            },
            {
                link: `https://ourworldindata.org/emissions-by-sector#sector-by-sector-where-do-global-greenhouse-gas-emissions-come-from`,
            },
            {
                quote: `/images/Emissions-by-sector-–-pie-charts.png`
            }
        ]
    },
    {
        id: 5,
        clicked: false,
        start: 129,
        end: 147,
        claim: "And the emissions produced when making a new car is equivalent to building just two metres of road. So it is nice to switch to electric cars but they won’t solve anything if we keep building roads the same way. Fixing one small part of the industrial system is not enough. ",
        evidence: [
            {
                commentary: `Road construction uses up large amounts of raw materials that require a lot of energy to produce, including asphalt and cement. This energy means lots of greenhouse gas emissions. According to this study for a 4-lane road constructed in China, a 20 km length of road that is 28 m wide involved the release of 52.26 million kg of CO2. That's 2,613 kg per meter length of road which would make 5.2 t for 2m of road. Specifics of the project are given in the second quote below taken from the Description of the Project section of the paper. `
            },
            {
                source: `Ma et al., Greenhouse Gas Emissions from Asphalt Pavement Construction: A Case Study in China, 2016`
            },
            {
                link: `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4809014/`,
            },
            {
                quote: `Asphalt pavement construction has significant environmental impacts. Its GHG emissions are evaluated and calculated for a case study in China, including raw materials production, mixing, transportation, laying, compacting and curing phase. The total CO2e emission of the 20 km long asphalt pavement construction project is 52,264,916.06 kg.`
            },
            {
                quote: `The case study is carried out on a typical four lane asphalt pavement of 20 km in length. The depth of the pavement structure is 72 cm. The width of the pavement is 28 m. The lane width is 3.75 m each. The widths of the hard shoulder and verge are 3.5 m and 0.75 m, respectively. At present, a semi-rigid base, which is usually produced from cement stabilized aggregate or gravel, is commonly used in China. The pavement structure, which consists of a cement stabilized aggregate base and an asphalt mixture surface is shown in Figure 3. The mixing plant is set up temporarily during the project. The average distance between the mixing plant and the construction site is 10 km.`
            },
            {
                commentary: `This was from a case-study in China so one might think that the values could be different in other countries and for other types of roads. There are many different parameters contributing to emissions from road construction from the type of materials used to distance from the material production site to road-construction site. So one would find values on a wide range. In the following there are a few examples to give a general idea on the spectrum of emissions.
                Following study compares life cycle emissions from 5 different case studies as summarized in the table:  `
            },
            {
                source: `Assessment Tool to Estimate CO2 Emissions of Pavement Production and Construction, Kamil E. Kaloush et al., retrieved 2021`
            },
            {
                link: `https://www.irbnet.de/daten/iconda/CIB17277.pdf `
            },
            {
                quote: `/images/alternative-pavement-designs-case-studies.png`
            },
            {
                commentary: `Following chart from the study shows that CO2eq emissions for the five cases are between 14.6 and 26.3 tons per kilometer, per year, over their useful life of 10 to 25 years. The roads in all case studies have two lanes and are 7.3 meters wide. When we match that to an 8 lane road for the sake of comparison with previous figures, and add up their emissions from their entire lifetime, we get 0.8 to 2.4 tons of CO2eq per meter length.  `
            },
            {
                quote: `/images/total-annual-kg-co2.png`
            },
            {
                commentary: `Another case study in Costa Rica, for instance, calculates a carbon footprint of 65.8 kg of CO2eq per km of road:`
            },
            {
                source: `Espinoza M. et al., Carbon Footprint Estimation in Road Construction: La Abundancia–Florencia Case Study, 2019.`
            },
            {
                link: `https://www.researchgate.net/publication/332492697_Carbon_Footprint_Estimation_in_Road_Construction_La_Abundancia-Florencia_Case_Study`
            },
            {
                quote: `The production and construction stages of the HMA layers generated a carbon footprint of 65.781 kg of CO2e per lane-km. The production stage of polymer-modified HMA layer presented a contribution of 29.596 kg of CO2e per lane-km, while the unmodified HMA layer contributed 34.851 kg of CO2e per lane-km.The unmodified HMA layer was thicker and used more asphalt content.`
            },
            {
                commentary: `Car manufacture also requires many energy-intensive materials, such as steel, with corresponding high greenhouse gas emissions. They vary in size and complexity, but we can estimate the range of CO2 required to produce an average car to be about 6 tons.`
            },
            {
                source: `Comparative life-cycle greenhouse gas emissions of a mid-size BEV and ICE vehicle, IEA, 2018`
            },
            {
                link: `https://www.iea.org/data-and-statistics/charts/comparative-life-cycle-greenhouse-gas-emissions-of-a-mid-size-bev-and-ice-vehicle `
            },
            {
                quote: `/images/comparative-life-cycle-greenhouse-gas-emissions-of-a-mid-size-bev-and-ice-vehicle.png`
            },
            {
                commentary: `This document contains a comparison for the CO2 emissions involved in producing different types of cars. The standard gasoline vehicle emits about 5,600 kg of CO2. Meanwhile producing an electric vehicle causes even higher emissions.`
            },
            {
                source: `Lifecycle emissions from cars, LowCVP, 2011`
            },
            {
                link: `https://www.zemo.org.uk/assets/workingdocuments/MC-P-11-15a%20Lifecycle%20emissions%20report.pdf `
            },
            {
                quote: `/images/vehicle-whole-analysis.png`
            },
            {
                commentary: `It is an annex to this full report:`
            },
            {
                source: `Preparing for a Life Cycle CO2 Measure, Ricardo, 2011`
            },
            {
                link: `https://www.zemo.org.uk/assets/reports/RD11_124801_5%20-%20LowCVP%20-%20Life%20Cycle%20CO2%20Measure%20-%20Final%20Report.pdf`
            }
        ]
    },
    {
        id: 6,
        clicked: false,
        start: 172,
        end: 192,
        claim: `There is a clear connection between the prosperity of a nation and its carbon emissions. In other words, richer people tend to cause more emissions. So the key to fixing climate change is simply for the world’s richest to cut back on their extravagant lifestyles right? While this would help, it wouldn’t make the problem go away.`,
        evidence: [
            {
                commentary: `The World Bank ranks countries based on criteria like Gross National Income per capita. There are 4 groups: High-, upper-middle-, lower-middle and low income. The following map shows the global distribution of income groups by country.`
            },
            {
                quote: `/images/world-bank-income-groups.png`
            },
            {
                commentary: `Based on the CO2 emissions data from 2019, distribution of share of the global production- and consumption-based emissions and global population among these four income groups is as follows:`
            },
            {
                quote: `/images/emissions-four-groups.png`
            },
            {
                commentary: `Courtesy of Hannah Ritche, OWID`
            },
            {
                commentary: `Even though CO2 emissions are mostly measured on the basis of production, consumption based emissions better reflect the life-style choices of individuals. Since consumption-based emissions also account for trade, they show how much of the production-based emissions are actually due to products exported to other countries. Therefore, if a country has a large volume of exports and therefore larger emissions ingrained in goods exported than imported, it would be a net exporter of emissions. One drawback about the consumption-based emissions is that data is not available for all countries since this requires a granular recording of traded goods and not all countries have the records. Therefore, this creates a gap in the data which is why we used the production-based emissions instead.`
            },
            {
                commentary: `Using the same data from the table above, we grouped the high- & upper-middle income countries and low- & lower middle income countries together. Even though the two groups have similar shares of global population, there is a stark difference between their emissions. `
            },
            {
                quote: `/images/emissions-four-groups-wealth.png`
            }
        ]
    },
    {
        id: 7,
        clicked: false,
        start: 192,
        end: 214,
        claim: `This is because 63% of global emissions come from low to middle income countries. Countries where most people are not living extravagantly but are trying to escape poverty at worst, and achieve a comfortable lifestyle at best. The unfortunate reality is that, currently, escaping poverty and becoming middle class creates unavoidable emissions.`,
        evidence: [
            {
                commentary: `Using the same data above, When the production based emissions are summed up for Low-, lower-middle and upper-middle income countries (0.53%, 13.5%, 48.9%, respectively), we end up with 63% of all CO2 emissions whereas they account for 84% of the global population. Following map shows the partition we used in the calculations, high-income vs three other groups:`
            },
            {
                quote: `/images/world-bank-income-groups2.png`
            },
            {
                commentary: `Courtesy of Hannah Ritche, OWID`
            }
        ]
    },
    {
        id: 8,
        clicked: false,
        start: 214,
        end: 250,
        claim: `So asking developing countries to cut emissions just looks like an attempt to keep them down. It is very hard to argue that a region should protect their primeval forests and spend money on solar panels instead of burning wood, when it can’t meet basic needs for significant parts of its population. So, cutting back is not a popular demand, especially if the countries making these demands got rich by causing environmental damage in the past. So for billions of people, more emissions are a good thing personally. When we forget about this, we tend to propose unworkable solutions.`,
        evidence: [
            {
                commentary: `This is a complex topict that can’t be covered in a couple sentences or even with a couple sources. This is why we made an entire video about it. You can watch the video here. `
            },
            {
                source: `Who Is Responsible For Climate Change? – Who Needs To Fix It?, Kurzgesagt, 2020`
            },
            {
                link: `https://www.youtube.com/watch?v=ipVxxxqwBQw `
            },
            {
                commentary: `If you would like to get even more context, have a look at the sources for this video as well:`
            },
            {
                link: `https://sites.google.com/view/sourcesclimateresponsibility/`
            }
        ]
    },
    {
        id: 9,
        clicked: false,
        start: 250,
        end: 257,
        claim: `Take concrete. 8% of CO2 emissions are released by the concrete manufacturing industry. `,
        evidence: [
            {
                commentary: `There are mainly two ways that concrete causes CO2 emissions: CO2 that is inherent to the basic reaction producing CaO and CO2 from CaCO3, which is part of the main component of cement. This first bit accounts for around 5%. Second is the industrial emissions caused by the large amounts of heat required to process the raw ingredients which adds up another 3% on top. `
            },
            {
                source: `Global CO2 emissions from cement production, Robbie M. Andrew, 2018`
            },
            {
                link: `https://essd.copernicus.org/articles/10/195/2018/essd-10-195-2018.pdf `
            },
            {
                quote: `There are two aspects of cement production that result in emissions of CO2. The first is the chemical reaction involved in the production of the main component of cement, clinker, as carbonates (largely limestone, CaCO3) are decomposed into oxides (largely lime, CaO) and CO2 by the addition of heat. Stoichiometry directly indicates how much CO2 is released for a given amount of CaO produced. Recent estimates are that these so-called “process” emissions contribute about 5 % of total anthropogenic CO2 emissions excluding land use change (Boden et al., 2017). The second source of emissions is the combustion of fossil fuels to generate the significant energy required to heat the raw ingredients to well over 1000 ◦C, and these “energy” emissions, including those from purchased electricity, could add a further 60 % on top of the process emissions (IEA, 2016). Total emissions from the cement industry could therefore contribute as much as 8 % of global CO2 emissions. These process (sometimes called “industry” or “industrial process”) and energy emissions are most often reported separately in global emissions inventories (Le Quéré et al., 2016, 2017; IPCC, 2006).`
            }
        ]
    },
    {
        id: 10,
        clicked: false,
        start: 257,
        end: 271,
        claim: `Ok cool, stop using concrete, right? But right now, concrete is also a cheap and easy way for growing populations in developing countries to build affordable housing. They don’t have much of a choice. And there are many examples like that.`,
        evidence: [
            {
                commentary: `Of the top 15 countries with highest emissions due to cement (the essential ingredient of concrete) worldwide in 2019, only 4 are grouped as high-income based on the WorldBank ranking used above. China is the largest by far, and it uses it to build homes, roads and other infrastructure for its nearly 1.4 billion population. Though there is also an important catch to this: It does not mean that Low-income countries (as per WorldBank classification above) are responsible for the concrete emissions and they should stop building concrete housing. Their overall emissions are still too low to catch up with the few big lower- and upper-middle income countries even if they keep building with concrete, as demonstrated in the following chart: `
            },
            {
                source: `Share of global CO₂ emissions from cement, 2019, OWID`
            },
            {
                link: `https://ourworldindata.org/grapher/share-global-co2-cement`
            },
            {
                quote: `/images/share-global-co2-cement.png`
            },
            {
                commentary: `The following study compares the construction costs for a mass timber building with a concrete option and found that wood costs 6% higher than concrete alternative: `
            },
            {
                source: `Shafayet Ahmed and Ingrid Arocho, Analysis of cost comparison and effects of change orders during construction: Study of a mass timber and a concrete building project, 2021  `
            },
            {
                link: `https://www.researchgate.net/publication/344579866_Analysis_of_cost_comparison_and_effects_of_change_orders_during_construction_Study_of_a_mass_timber_and_a_concrete_building_project`
            },
            {
                quote: `This study centers on assessing the cost of a mass timber high-rise building project and compare the construction cost with the modeled cost of the same building designed by concrete option. Outcomes of cost study suggest that the construction cost of mass timber building is 6.43% higher than the modeled concrete option, which supports the findings of previous studies where timber construction costs were ranged 2–6% higher than the traditional concrete and steel construction.`
            },
            {
                quote: `/images/subtotal-estimate-cement-wood.png`
            },
            {
                commentary: `Building practices, however, can differ based on local conditions and specific needs of the people in the given region. People can build housing out of a lot of different materials and concrete might not always be the best or only choice. Following study, for instance, demonstrates a specific case for Haiti where the low quality concrete buildings proved to be unreliable in the face of frequent earthquakes and natural disasters: `
            },
            {
                source: `H. McWilliams, C.T. Griffin. A critical assessment of concrete and masonry structures for reconstruction after seismic events in developing countries, 2013`
            },
            {
                link: `http://www.web.pdx.edu/~cgriffin/research/hmcwilliams_seismic.pdf`
            },
            {
                quote: `Much of the research and proposals made for the better rebuilding of Haiti, primarily focuses on the creation, education, and enforcement of “better” construction methods, life safety standards and codes imported from developed countries. These fail to address the other, perhaps more important, social and economic issues that led to substandard structures in the first place. Masonry and concrete buildings are typical throughout Haiti, and are continuing to be proposed for reconstruction. Research has shown that the structures of these concrete buildings are both unreliable and ineffective when natural disasters occur, due to compromised construction in the quality or quantity of materials.`
            }
        ]
    }
]