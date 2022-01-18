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
    },
    {
        id: 11,
        clicked: false,
        start: 271,
        end: 289,
        claim: `Even rich countries aren’t immune from disagreeing about rapid climate change solutions. Banning coal, gas and oil from energy is slowed down by heated discussions about what should replace them. Citizens can be strictly against nuclear power but also oppose wind or solar infrastructure in their backyards. `,
        evidence: [
            {
                commentary: `Most people agree that something should be done about climate change. They understand that we need to build fields of solar panels, huge wind turbines and even nuclear reactors to reduce our carbon emissions. Except, few people want to live near these installations or even have to look at them. They worry about how it would affect them personally, such as a loss in property value or some discomfort, and it takes precedence over vague benefits to humanity.`
            },
            {
                commentary: `‘Not in My Backyard’ (NIMBY) is used to describe this sort of opposition. People want to do something about a problem but reject a solution when its impact becomes too personal.`
            },
            {
                source: `Not in My Backyard Phenomenon, Encyclopedia Britannica, retrieved 2021`
            },
            {
                link: `https://www.britannica.com/topic/Not-in-My-Backyard-Phenomenon `
            },
            {
                quote: `The phrase “not in my backyard” has two distinct usages and categories of users. In some circumstances, it connotes the unwillingness of individuals to accept the construction of large-scale projects by corporations or governmental entities nearby, which might affect their quality of life and the value of their property. Project proponents (which usually consist of the sponsoring corporation, construction labor unions and contractors, etc.) tend to use the phrase in this manner. The phrase is also used by social service and environmental justice advocates to imply an absence of social conscience expressed by a class-, race-, or disability-based opposition to the location of social-service facilities in neighborhoods.`
            },
            {
                commentary: `There are also critiques of the NIMBY explanation who suggest that the NIMBY concept tends to mask the unmet larger social needs by the proposed projects and simplify otherwise complex reasons why people object to renewables in their neighbourhoods. A recent case study, for instance, suggests that the NIMBY approach fails to see the complicated nature of residents’ motivations and is rather counterproductive. The variables affecting the acceptance of the project were rather lack of developer trust, procedural justice and perceived impacts.`
            },
            {
                source: `George-O’Neil, Community obstacles to large scale solar: NIMBY and renewables, 2021`
            },
            {
                link: `https://link.springer.com/article/10.1007/s13412-020-00644-3`
            },
            {
                quote: `Although the immediate response to opposition of a solar project may seem to fit a “Not in My Back Yard” (NIMBY) profile, this case furthers the discussion regarding the problematic NIMBY concept. The objection to these projects is much more complex than simply not wanting the project in “my backyard.” Labeling those with questions and concerns about the location of a project as NIMBY serves only as a means to dismiss their concerns, and proved divisive and unproductive in this case. As previous research has noted, the NIMBY label often masks larger societal concerns not being addressed by a proposed project (Devine-Wright 2012; Freudenburg and Pastor 1992; Hubbard 2006; Kraft and Clary 1991; Outka 2012; van der Horst 2007; Wolsink 2000, 2006). `
            }
        ]
    },
    {
        id: 12,
        clicked: false,
        start: 289,
        end: 315,
        claim: `In principle all of these issues can be overcome – but there are things we don’t currently know how to overcome. The most problematic one is food. We will soon need to feed 10 billion people, and we don’t know how to do this without emitting greenhouse gases. Because of the nature of modern food production that requires fertilizers or manure, it is impossible to have zero-emissions food. `,
        evidence: [
            {
                commentary: `The world population is very likely going to grow to 10 billion by 2060, and is expected to exceed 11 billion by 2100.`
            },
            {
                source: `World Population Prospects 2019, UN, 2019`
            },
            {
                link: `https://population.un.org/wpp/Graphs/Probabilistic/POP/TOT/900`
            },
            {
                quote: `/images/world-total-population.png`
            },
            {
                commentary: `Our current food production practices take up a quarter of global GHG emissions. And if we persist the same way in the next decades, food emissions are going to use up our carbon budget that is necessary to keep the increase in the global average temperature below 2 deg C by 2100:`
            },
            {
                source: `Food production is responsible for one-quarter of the world’s greenhouse gas emissions,  Hannah Ritchie, 2019`
            },
            {
                link: `https://ourworldindata.org/food-ghg-emissions `
            },
            {
                quote: `Food is responsible for approximately 26% of global GHG emissions.`
            },
            {
                quote: `/images/How-much-of-GHGs-come-from-food.png`
            },
            {
                source: `Emissions from food alone could use up all of our budget for 1.5°C or 2°C – but we have a range of opportunities to avoid this, OWID, 2021`
            },
            {
                link: `https://ourworldindata.org/food-emissions-carbon-budget`
            },
            {
                commentary: `Following OWID chart shows food emissions in comparison to carbon budgets under different scenarios. For instance, if we were to emit in the next decades to the same degree we do currently, food emissions would take up almost all of our carbon budget for keeping the global temperature rise under 2 deg C. `
            },
            {
                quote: `/images/Food-emissions-vs.-temp-limits.png`
            },
            {
                commentary: `The World Resources Institute calculated the emissions for the year 2050, in case there won’t be any changes in our food production system:`
            },
            {
                source: `World Resources Institute, 5 Questions about Agricultural Emissions Answered, 2019`
            },
            {
                link: `https://www.wri.org/insights/5-questions-about-agricultural-emissions-answered`
            },
            {
                quote: `With little to no climate action  in the agriculture sector, greenhouse gas emissions from agricultural production could increase 58% by 2050. WRI research also showed that when factoring in land-use change, agricultural emissions under a business-as-usual scenario could eat up 70% or more of the world's "carbon budget," the amount of emissions the world can release by 2050 while still limiting global temperature rise to 2 degrees C. Under a more ambitious mitigation scenario called RCP2.6, emissions from the agricultural sector will still increase, but only by 6% (compared to 2000).`
            },
            {
                commentary: `The institute also calculated with a more optimistic scenario, in which we will see a reduction of 67% until the year 2050, but still not erase all of the emissions by the food-industry: `
            },
            {
                source: `World Resources Institute, How to Sustainably Feed 10 Billion People by 2050, in 21 Charts, 2018`
            },
            {
                link: `https://www.wri.org/insights/how-sustainably-feed-10-billion-people-2050-21-charts`
            },
            {
                quote: `Feeding 10 billion people sustainably by 2050, then, requires closing three gaps:

                A 56 percent food gap between crop calories produced in 2010 and those needed in 2050 under “business as usual” growth;
                
                A 593 million-hectare land gap (an area nearly twice the size of India) between global agricultural land area in 2010 and expected agricultural expansion by 2050; and
                
                An 11-gigaton GHG mitigation gap between expected agricultural emissions in 2050 and the target level needed to hold global warming below 2oC (3.6°F), the level necessary for preventing the worst climate impacts.`
            },
            {
                quote: `/images/2050-sustainable-food-future.png`
            },
            {
                commentary: `There are many contributors to food emissions: Enteric fermentation by livestock has the biggest share according to the breakdown of agricultural production emissions in the WRI chart below. However, even if we stopped eating meat, there would still be emissions due to other factors. We would still need fertilizer to grow our crops which also causes emissions. Nearly half of the food that the world’s population consumes is grown thanks to synthetic fertilizers. It takes the form of ammonia produced by the Haber-Bosch process, which is an industrial method that requires a lot of nitrogen, hydrogen and energy. That energy specifically is the cause of a lot of carbon emissions. `
            },
            {
                source: `World Resources Institute, 5 Questions about Agricultural Emissions Answered, 2019`
            },
            {
                link: `https://www.wri.org/insights/5-questions-about-agricultural-emissions-answered`
            },
            {
                quote: `/images/emissions-by-sector.png`
            },
            {
                source: `Fertilizers, OWID, retrieved 2021`
            },
            {
                link: `https://ourworldindata.org/fertilizers`
            },
            {
                quote: `Nitrogen fertilizers only became available following the commercialization of the Haber-Bosch process from 1910 onwards. Since then, Erisman et al. estimate it has supported 42 percent of global births over the past century. This amounts to 44 percent of the global population in 2000 being fed by nitrogen fertilizers, rising to 48 percent in 2008. Here we have extended this estimate to 2015 with the continuation of the assumption that 48 percent of the global population are fed by nitrogen fertilizers. Since the share supported by the process continues to rise, this may in fact be a conservative estimate.`
            }
        ]
    },
    {
        id: 13,
        clicked: false,
        start: 315,
        end: 323,
        claim: `Rice alone emits  so much methane each year that it practically equals the emissions of all the air traffic in the world.`,
        evidence: [
            {
                commentary: `According to the OWID chart, rice cultivation accounted for 1.3% of global greenhouse emissions in 2016, almost on par with aviation which was responsible for 1.9%. `
            },
            {
                commentary: `In fairness, we would like to provide some context here though: The numbers are for all greenhouse gas emissions converted to CO2 equivalents, therefore it is not possible to make a one to one comparison. However, most of the emissions of rice are due to methane and methane emissions from aviation are marginal compared to its CO2 emissions. Also, it is important to note that rice is also a staple food for billions of people and it accounts for ~20% of the world's calorie supply. `
            },
            {
                source: `Emissions by sector, OWID, 2021`
            },
            {
                link: `https://ourworldindata.org/emissions-by-sector#sector-by-sector-where-do-global-greenhouse-gas-emissions-come-from `
            },
            {
                quote: `/images/Emissions-by-sector-–-pie-charts.png`
            }
        ]
    },
    {
        id: 14,
        clicked: false,
        start: 323,
        end: 327,
        claim: `What’s worse is that the foods we like the most emit the most. `,
        evidence: [
            {
                commentary: `We are alluding to meat here, especially beef. Favorite food items vary a lot around the world and beef might not be in the top 5 for everyone. Animal-based food products, however, are used in almost all cuisines around the world and are parts of favorite dishes one way or another around the globe. `
            },
            {
                commentary: `Following chart shows the distribution of greenhouse gas emissions of different food items. `
            },
            {
                source: `Where do the emissions from our food come from?, OWID, 2021.`
            },
            {
                link: `https://ourworldindata.org/environmental-impacts-of-food#where-do-the-emissions-from-our-food-come-from`
            },
            {
                quote: `/images/Environmental-impact-of-food-by-life-cycle-stage.png`
            }
        ]
    },
    {
        id: 15,
        clicked: false,
        start: 327,
        end: 338,
        claim: `57% of food emissions come from animal-based foods, although they make up only 18% of the world’s calories, and 37% of its protein. `,
        evidence: [
            {
                commentary: `Following study is the most extensive meta-analysis conducted so far on the environmental impact of global food production. Authors analyzed data from 570 studies, for 40 different animal- and plant- based food products from 38,000 farms around the world. Their analysis suggests that the total impact of livestock, fish, eggs and dairy adds up to 57% of food emissions including emissions from land-use, feed and supply chain.   `
            },
            {
                commentary: `We thank the author of the study Joseph Poore for helping us with the calculation for the overall emissions of animal-based food products for this sentence.`
            },
            {
                source: `Reducing food’s environmental impacts through producers and consumers, J. Poore and T. Nemecek, 2018`
            },
            {
                link: `https://science.sciencemag.org/content/360/6392/987 `
            },
            {
                quote: `In particular, the impacts of animal products can markedly exceed those of vegetable substitutes (Fig. 1), to such a degree that meat, aquaculture, eggs, and dairy use ~83% of the world’s farmland and contribute 56 to 58% of food’s different emissions, despite providing only 37% of our protein and 18% of our calories.`
            },
            {
                commentary: `Based on the paper above, the following OWID chart presents the distribution of agricultural land vs contribution to calorie and protein supply. They also have a full article and infographics looking into different aspects of the environmental impact of food, from water and land use to carbon print of various food items.`
            },
            {
                source: `OWID, Environmental impacts of food production, 2021`
            },
            {
                link: `https://ourworldindata.org/environmental-impacts-of-food#half-of-the-world-s-habitable-land-is-used-for-agriculture`
            },
            {
                quote: `/images/Global-land-use-graphic.png`
            }
        ]
    },
    {
        id: 16,
        clicked: false,
        start: 338,
        end: 342,
        claim: `And as people across the world grow richer, they want more meat. `,
        evidence: [
            {
                commentary: `This is a meat consumption per person (in kilograms per year) vs GDP per person (in USD) chart based on global data from 1960 to 2018.`
            },
            {
                quote: `/images/meat-vs-gdp-per-capita.png`
            },
            {
                commentary: `This is the data in table format:`
            },
            {
                quote: `/images/table-format.png`
            },
            {
                commentary: `The figures are derived from the following sources:`
            },
            {
                source: `OWID, Global meat production, 2021`
            },
            {
                link: `https://ourworldindata.org/grapher/global-meat-production `
            },
            {
                source: `OWID, GDP per capita, 2021`
            },
            {
                link: `https://ourworldindata.org/grapher/gdp-per-capita-maddison-2020?country=~OWID_WRL `
            },
            {
                source: `OWID, Population, 2021`
            },
            {
                link: `https://ourworldindata.org/grapher/population?time=1947..2019&country=~OWID_WRL `
            }
        ]
    },
    {
        id: 17,
        clicked: false,
        start: 342,
        end: 361,
        claim: `Traditional diets in most cultures were primarily plant based with a little meat on top. But with the rise of industrial style meat production and factory farming, meat has become a staple food; a regular indulgence in developed countries and a symbol of status and wealth in developing countries. `,
        evidence: [
            {
                commentary: `Following chart shows the change of meat consumption in the last 50 years. `
            },
            {
                source: `OWID, Daily meat consumption per person, 1961 to 2013`
            },
            {
                link: `https://ourworldindata.org/grapher/daily-meat-consumption-per-person?tab=chart&country=Africa~Oceania~Europe~Asia~Northern+America~South+America`
            },
            {
                quote: `/images/daily-meat-consumption-per-person.png`
            }
        ]
    },
    {
        id: 18,
        clicked: false,
        start: 361,
        end: 381,
        claim: `Today about 40 percent of the world’s habitable land is used for meat production in some form or another, the size of North and South America combined. This is land on which we could otherwise allow native ecosystems to regrow, like forests in the Amazon, and suck carbon out of the atmosphere, but instead most of it is used to feed animals.`,
        evidence: [
            {
                commentary: `Half of the world’s habitable land is dedicated to agriculture. 77% of that figure is spent raising livestock, grazing or growing feed for animals. That means 38.5% of habitable land is meant for meat, which we have rounded up to 40%.`
            },
            {
                source: `OWID, Land Use, 2019`
            },
            {
                link: `https://ourworldindata.org/land-use `
            },
            {
                quote: `Agriculture is a major use of land. Half of the world’s habitable land is used for agriculture. The extensive land use has a major impact on the earth’s environment as it reduces wilderness and threatens biodiversity.`
            },
            {
                quote: `/images/Global-land-use-graphic.png`
            },
            {
                source: `OWID, How the world’s land is used: total area sizes by type of use & cover`
            },
            {
                link: `https://ourworldindata.org/land-use#how-the-world-s-land-is-used-total-area-sizes-by-type-of-use-cover`
            },
            {
                quote: `/images/World-Map-by-Land-Use-01.png`
            }
        ]
    },
    {
        id: 19,
        clicked: false,
        start: 381,
        end: 389,
        claim: `The available solutions are uniquely able to make everybody on the political spectrum, rich or poor, unhappy. `,
        evidence: [
            {
                commentary: `This report gives a good overview over food solutions to decrease emissions: `
            },
            {
                source: `Ranganathan et al., How to Sustainably Feed 10 Billion People by 2050, in 21 Charts, WRI, 2018. `
            },
            {
                link: `https://www.wri.org/insights/how-sustainably-feed-10-billion-people-2050-21-charts`
            },
            {
                commentary: `The major solutions for reducing the CO2 impact of food production are often unpopular, such as genetic engineering and a ‘CO2 tax’ added to meat.`
            },
            {
                commentary: `Genetic engineering has created crops that are in widespread use today. They have desirable properties such as increased yields, reduced need for pesticides or improved vitamin content.`
            },
            {
                source: `Impact of genetically engineered maize on agronomic, environmental and toxicological traits: a meta-analysis of 21 years of field data, Elisa Pellegrino et al., 2018`
            },
            {
                link: `https://www.nature.com/articles/s41598-018-21284-2 `
            },
            {
                quote: `In our study we found that yield increase of GE maize varied in relation to the type of hybrid, ranging from 5.6 to 24.5% in double and quadruple stacked hybrids, respectively. Quadruple stacked hybrids provided higher grain yields.`
            },
            {
                source: `Potential of golden potatoes to improve vitamin A and vitamin E status in developing countries, Chureeporn Chitchumroonchokchai et al., 2017`
            },
            {
                link: `https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0187102`
            },
            {
                quote: `These results suggest that a 150 g serving of boiled golden potatoes has the potential to contribute 42% and 23% of the daily requirement of retinol activity equivalents (RAE), as well as 34 and 17% of the daily vitamin E requirement for children and women of reproductive age, respectively.`
            },
            {
                commentary: `But GMO crops are often seen as very controversial and don’t have a high acceptance among people. `
            },
            {
                source: `Pew research Center, About half of U.S. adults are wary of health effects of genetically modified foods, but many also see advantages, 2020`
            },
            {
                link: `https://www.pewresearch.org/fact-tank/2020/03/18/about-half-of-u-s-adults-are-wary-of-health-effects-of-genetically-modified-foods-but-many-also-see-advantages/ `
            },
            {
                quote: `About half of U.S. adults (51%) think GMOs are worse for people’s health than foods with no genetically modified ingredients, while 41% say GM foods have a neutral effect on health. Just 7% say they are better for health than other foods.`
            },
            {
                source: `Mihael Cristin Ichim, The more favorable attitude of the citizens toward GMOs supports a new regulatory framework in the European Union, 2020`
            },
            {
                link: `https://www.tandfonline.com/doi/full/10.1080/21645698.2020.1795525`
            },
            {
                quote: `The percentage of EU citizens concerned about the presence of GMOs in the environment has decreased from 30% (in 2002) to 19% (in 2011), while the level of concern about the use of GM ingredients in food or drinks has decreased from 63% (in 2005) to 27% (in 2019). The steadily increasing acceptance of the EU citizens of GMOs in the environment and food, as it was recorded by Eurobarometers, should additionally ease the way and support a positive change of the legal framework that regulates the GM crops’ testing and commercial cultivation in the EU.`
            },
            {
                commentary: `One of the reasons that the agricultural sector continues to be so environmentally damaging is that it manages to hide the cost of its devastation from the products you buy. However, if there was a cost assigned to that damage, the price of meat and dairy increases dramatically. `
            },
            {
                source: `Calculation of external climate costs for food highlights inadequate pricing of animal products, Maximilian Pieper et al., 2020`
            },
            {
                link: `https://www.nature.com/articles/s41467-020-19474-6 `
            },
            {
                quote: `Although the agricultural sector is globally a main emitter of greenhouse gases, thorough economic analysis of environmental and social externalities has not yet been conducted. [...] Using life-cycle assessment and meta-analytical approaches, we calculate the external climate costs of foodstuff. Results show that external greenhouse gas costs are highest for conventional and organic animal-based products (2.41€/kg product; 146% and 71% surcharge on producer price level), followed by conventional dairy products (0.24€/kg product; 91% surcharge) and lowest for organic plant-based products (0.02€/kg product; 6% surcharge). `
            }
        ]
    },
    {
        id: 20,
        clicked: false,
        start: 397,
        end: 406,
        claim: `In the end it is pretty simple: eating less meat alone won’t stop climate change, but we also can’t stop climate change without eating less meat.`,
        evidence: [
            {
                commentary: `As commented above, food is one of the biggest levers we have to cut back on emissions accounting for a quarter of the global GHG emissions. Given that more than half of food emissions come from animal-based products, continuing current production and consumption will cause increasingly aggravated emissions. `
            },
            {
                commentary: `The following OWID chart demonstrates how much we could reduce by eliminating different levels of animal-based foods from our diets. Given that we need to reduce the emissions more than half of the current levels even in the least stringent carbon budget estimates, carrying on today’s food emissions to the next decades is not a realistic option. `
            },
            {
                source: `OWID, What are the carbon opportunity costs of our food?, 2021`
            },
            {
                link: `https://ourworldindata.org/carbon-opportunity-costs-food`
            },
            {
                quote: `/images/Carbon-savings-of-diets-Poore-and-Stehfest-–-bar-chart.png`
            },
            {
                source: `Emissions from food alone could use up all of our budget for 1.5°C or 2°C – but we have a range of opportunities to avoid this, OWID, 2021`
            },
            {
                link: `https://ourworldindata.org/food-emissions-carbon-budget`
            },
            {
                commentary: `Following OWID chart shows food emissions in comparison to carbon budgets under different scenarios. For instance, if we were to emit in the next decades to the same degree we do currently, food emissions would take up almost all of our carbon budget for keeping the global temperature rise under 2 deg C. `
            },
            {
                quote: `/images/Food-emissions-vs.-temp-limits.png`
            }
        ]
    },
    {
        id: 21,
        clicked: false,
        start: 436,
        end: 448,
        claim: `In principle, this technology already exists: Direct Air Capture of CO2 draws carbon dioxide from the air so that it can be stored underground or transformed into products.`,
        evidence: [
            {
                source: `IEA, Direct Air Capture, 2020`
            },
            {
                link: `https://www.iea.org/reports/direct-air-capture`
            },
            {
                quote: `Direct air capture is a technology to capture CO2 from the atmosphere. The CO2 can be permanently stored in deep geological formations or used in the production of fuels, chemicals, building materials and other products containing CO2. When CO2 is geologically stored, it is permanently removed from the atmosphere, resulting in negative emissions. There are currently 15 direct air capture plants operating worldwide, capturing more than 9 000 tCO2/year, with a 1 MtCO2/year capture plant in advanced development in the United States. In the SDS, direct air capture is scaled up to capture almost 10 MtCO2/year by 2030. This is within reach but will require several more large-scale demonstrations to refine the technology and reduce capture costs.`
            },
            {
                commentary: `Most major reports on what we need to do to combat climate change rely on the use of carbon capture technology. There are many ways to accomplish this, but Direct Air Capture solves the problem of carbon emissions directly instead of simply reducing their release or compensating for emissions after they are released. Whether or not focusing on this solution is a good idea is up to debate, but it must be considered nonetheless.`
            },
            {
                source: `The potential for CCS and CCU in Europe, European Gas Regulatory Forum, 2019`
            },
            {
                link: `https://ec.europa.eu/info/sites/default/files/iogp_-_report_-_ccs_ccu.pdf `
            },
            {
                quote: `Techniques to remove CO2 from the atmosphere are used in all 1.5°C pathways, with most scenarios favouring BECCS [Bioenergy with carbon capture and storage ]. The pathways generally rely on a significant scale-up of CCS [Carbon Capture and Storage] in gas-fired power and industry, and in combination with bioenergy for carbon removal.`
            },
            {
                quote: `The Intergovernmental Panel on Climate Change Special Report on Global Warming of 1.5°C (SR1.5) showed the importance of limiting global warming to 1.5°C compared to pre-industrial levels. Techniques to remove CO2 from the atmosphere are used in all 1.5°C pathways, with most scenarios favouring BECCS. Figure 2 illustrates the amount of CCS used in the IPCC’s 1.5°C, 2°C and higher scenarios in terms of Gt CO2 captured and stored per year, including industrial, biogenic and fossil sources of CO2. One scenario uses 0 Gt CO2/yr, a few use a little, and most scenarios [...] use around 15Gt CO2/yr in 2100, independent of temperature pathway.`
            },
            {
                quote: `/images/global-capture-storage.png`
            },
            {
                source: `Global warming of 1.5°C, IPCC, 2019`
            },
            {
                link: `https://www.ipcc.ch/site/assets/uploads/sites/2/2019/06/SR15_Full_Report_High_Res.pdf`
            },
            {
                quote: `All pathways that limit global warming to 1.5°C with limited or no overshoot project the use of carbon dioxide removal (CDR) on the order of 100–1000 GtCO2 over the 21st century.`
            }
        ]
    },
    {
        id: 22,
        clicked: false,
        start: 448,
        end: 464,
        claim: `So why aren’t we implementing it in every industry, everywhere? Because with the technology we have right now, this would cost some ten trillion dollars per year, or half the United States’ GDP. This money has to come from somewhere and currently no-one is offering it. `,
        evidence: [
            {
                commentary: `We need to reduce carbon emissions by about 25 billion tons per year to avoid global temperatures rising by 2°C. Avoiding a 1.5°C increase would mean even harsher and more rapid cuts to emissions.`
            },
            {
                source: `Global Energy Transformation, IRENA, 2018`
            },
            {
                link: `https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2018/Apr/IRENA_Report_GET_2018.pdf `
            },
            {
                quote: `/images/cumulative-energy-emissions.png`
            },
            {
                commentary: `If we do not change our ways of producing energy or food, that decrease in emissions would have to come entirely from carbon capture technologies. However, it would cost between $250 and $600 per ton captured and stored. This gives a total of between $6.3 and $15 trillion per year. In comparison, the GDP of the USA was 18.14 trillion$ in 2018.`
            },
            {
                source: `OWID, GDP, 2018`
            },
            {
                link: `https://ourworldindata.org/grapher/gdp-world-regions-stacked-area?country=~USA`
            },
            {
                source: `Direct Air Capture: Resource Considerations and Costs for Carbon Removal, WRI, 2021`
            },
            {
                link: `https://www.wri.org/insights/direct-air-capture-resource-considerations-and-costs-carbon-removal `
            },
            {
                quote: `Despite the benefits and flexibility, direct air capture is more costly per tonne of CO2 captured compared to most mitigation approaches and most natural climate solutions. The range of costs for DAC vary between $250-$600 today depending on the technology choice, low-carbon energy source and the scale of their deployment. For context, most reforestation costs less than $50/tonne. Depending on the rate of deployment, which can accelerate through supportive policies and market development, costs for DAC could fall to around $150-$200 per tonne over the next 5-10 years.`
            }
        ]
    },
    {
        id: 23,
        clicked: false,
        start: 464,
        end: 477,
        claim: `Just dumping these costs on massive polluters like steel mills and coal power stations would double the cost of their products – industries that operate on very tight profit margins would be bankrupted.`,
        evidence: [
            {
                commentary: `Steel emits about 1.85 tons of CO2 for each 1 ton produced. If we take the cost of removing one ton of CO2 to be $250, which is a low-end estimate, then we would have to add an extra $460 to the price of steel as an environmental cost to deal with the CO2 it emits. Steel prices vary, but it is usually sold at around $500 per ton. This means an environmentally-conscious price of steel would rise by 92%.`
            },
            {
                source: `Steel’s Contribution To A Low Carbon Future And Climate Resilient Societies, World Steel Association, 2020`
            },
            {
                link: `https://www.worldsteel.org/en/dam/jcr:7ec64bc1-c51c-439b-84b8-94496686b8c6/Position_paper_climate_2020_vfinal.pdf`
            },
            {
                quote: `The greenhouse gas of most relevance to the world steel industry is carbon dioxide (CO2). On average for 2018, 1.85 tonnes of CO2 were emitted for every tonne of steel produced. The steel industry generates between 7 and 9% of direct emissions from the global use of fossil fuel.`
            },
            {
                source: `Direct Air Capture: Resource Considerations and Costs for Carbon Removal, WRI, 2021`
            },
            {
                link: `https://www.wri.org/insights/direct-air-capture-resource-considerations-and-costs-carbon-removal `
            },
            {
                quote: `Despite the benefits and flexibility, direct air capture is more costly per tonne of CO2 captured compared to most mitigation approaches and most natural climate solutions. The range of costs for DAC vary between $250-$600 today depending on the technology choice, low-carbon energy source and the scale of their deployment. For context, most reforestation costs less than $50/tonne. Depending on the rate of deployment, which can accelerate through supportive policies and market development, costs for DAC could fall to around $150-$200 per tonne over the next 5-10 years.`
            },
            {
                source: `Steel (Europe) Price Outlook, Focus Economics, 2021`
            },
            {
                link: `https://www.focus-economics.com/commodities/base-metals/steel-europe `
            },
            {
                quote: `/images/steel-historical-price-chart.png`
            },
            {
                commentary: `Producing electricity from coal-fired power stations involves the emission of 0.85 kg of CO2 per kWh. Using the same $250 per ton of CO2 removed figure, we find that the cost of removing 0.85 kg of CO2 to be $0.21. For comparison, 1 kWh of electricity is sold for $0.132 in the USA and $0.21 in Europe. Adding the carbon cost would increase electricity prices by 100% to 160%. `
            },
            {
                commentary: `It is not possible for these industries to continue operating as they do today if they have to account for their carbon cost. Many would likely go bankrupt without special measures being taken, and opinions will differ on whether that is an unacceptable outcome or a necessary cut. `
            },
            {
                source: `Carbon Footprint of Electricity Generation, Parliament Office of Science & Technology, 2011`
            },
            {
                link: `https://www.parliament.uk/globalassets/documents/post/postpn_383-carbon-footprint-electricity-generation.pdf`
            },
            {
                quote: `Within the range of international carbon footprint estimates shown on Figure 1, three studies give figures for existing UK plants of 786, 846 and 990 gCO2eq/kWh.`
            },
            {
                quote: `/images/international-carbon-footprints-of-fossil-fuel-electricity.png`
            },
            {
                source: `Electric Rates by State (May 2021), Electric Choice, 2021`
            },
            {
                link: `https://www.electricchoice.com/electricity-prices-by-state/ `
            },
            {
                quote: `The average electricity rate is 13.19 cents per kilowatt hour (kWh).`
            },
            {
                source: `Electricity price statistics, EuroStat, 2021`
            },
            {
                link: `https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Electricity_price_statistics `
            },
            {
                quote: `/images/electricity-prices-for-household-consumers.png`
            }
        ]
    },
    {
        id: 24,
        clicked: false,
        start: 477,
        end: 485,
        claim: `Getting the government to pay for it seems logical but a lot of state resources are actually tied up doing the opposite, like subsidizing oil and gas. `,
        evidence: [
            {
                source: `Global Fossil Fuel Subsidies Remain Large: An Update Based on Country-Level Estimates, David Coady et al., 2019`
            },
            {
                link: `https://www.imf.org/en/Publications/WP/Issues/2019/05/02/Global-Fossil-Fuel-Subsidies-Remain-Large-An-Update-Based-on-Country-Level-Estimates-46509`
            },
            {
                quote: `Globally, subsidies remained large at $4.7 trillion (6.3 percent of global GDP) in 2015 and are projected at $5.2 trillion (6.5 percent of GDP) in 2017. The largest subsidizers in 2015 were China ($1.4 trillion), United States ($649 billion), Russia ($551 billion), European Union ($289 billion), and India ($209 billion). About three quarters of global subsidies are due to domestic factors—energy pricing reform thus remains largely in countries’ own national interest—while coal and petroleum together account for 85 percent of global subsidies.`
            },
            {
                source: `IEA, Value of fossil-fuel subsidies by fuel in the top 25 countries, 2020`
            },
            {
                link: `https://www.iea.org/topics/energy-subsidies`
            },
            {
                quote: `In 2020, the fall in fossil fuel prices and energy use brought the value of fossil fuel consumption subsidies down to a record low – the estimate of just over USD 180 billion is some 40% down from 2019 levels. This is the lowest annual figure since we started tracking these subsidies in 2007. Almost all countries had lower estimated subsidies year-on-year; Iran remains the single largest provider of these subsidies, although the value of the implicit support to domestic consumers fell by more than USD 50 billion in 2020, due to low crude prices and weak economic conditions. One of the very few categories where our subsidy estimate grew year-on-year was oil products in China (notably for residential use), reflecting a relatively rapid recovery from the pandemic. Overall, the weighted-average subsidy rate was some 10% - meaning that consumers receiving these subsidies paid on average around 90% of the competitive market reference prices for the energy products concerned.`
            },
            {
                quote: `/images/fossil-fuel-subsidies-top-25-countries.png`
            }
        ]
    },
    {
        id: 25,
        clicked: false,
        start: 485,
        end: 507,
        claim: `Which seems counter intuitive but follows clear incentives. By artificially keeping fuel prices low, shipping and everyday goods are kept artificially cheap too. Which has a major social impact on billions of people around the world. That creates political lobbies and incentives that perpetuate this cycle that makes it so hard to cut off fossil fuel production. `,
        evidence: [
            {
                commentary: `Even though lower fossil fuel prices reflect on the prices of the goods used day to day, subsidies could indirectly be causing lesser benefits in the systems level, benefiting producers more than the consumers. `
            },
            {
                source: `IMF, Who Benefits from Fossil Fuel Subsidies`
            },
            {
                link: `https://www.imf.org/en/Topics/climate-change/energy-subsidies#Who%20Benefits%20from%20Energy%20Subsidies`
            },
            {
                quote: `Fossil fuel subsidies are an important policy issue for all countries. Not only do energy subsidies have negative economic and environmental effects, they also mainly benefit the wealthiest households. A number of studies have shown that energy subsidies are very badly targeted, further reinforcing existing income inequalities; for instance, a recent review finds that the richest 20 percent of households receive six times more in subsidies than the poorest 20 percent. However, energy subsidy reform can still have a significant adverse impact on the welfare of low-income households and mitigating this impact is a key component of any energy subsidy reform strategy. This calls for tools to assess the magnitude of the welfare impact with the view to inform the design of appropriate mitigating measures to protect the most vulnerable households.`
            },
            {
                source: `Matthew J. Kotchen, The producer benefits of implicit fossil fuel subsidies in the United States, 2020.`
            },
            {
                link: `https://environment.yale.edu/kotchen/pubs/FFsubsidies.pdf`
            },
            {
                quote: `Along with greater recognition of explicit and implicit fossil fuel subsidies has come growing concern about their distributional consequences. Who benefits? Who bears the costs? And how might a better understanding of the distributional impacts affect the political economy and feasibility of proposed reforms? While existing studies have focused on distributional impacts of efficient pricing among households (22–27), questions about how distributional burdens are split between producers and consumers have gone unstudied. Indeed, as discussed previously, the existing literature on fossil fuel subsidies, which focuses primarily on environmental consequences and efficiency implications, sidesteps the issue completely by assuming perfectly elastic supply and therefore zero PI.`
            },
            {
                commentary: `Following report revises some case studies on selected countries with different energy subsidy policies:`
            },
            {
                source: `Gabriela Inchauste and David G. Victor, Editors, The Political Economy of Energy Subsidy Reform, World Bank Group, 2017`
            },
            {
                link: `https://openknowledge.worldbank.org/bitstream/handle/10986/26216/9781464810077.pdf`
            }
        ]
    },
    {
        id: 26,
        clicked: false,
        start: 507,
        end: 517,
        claim: `Meanwhile, very costly solutions for a far-off problem like carbon capture seem like they can wait, as technically nobody benefits from it right now.`,
        evidence: [
            {
                source: `IEA, Is carbon capture too expensive?, 2021`
            },
            {
                link: `https://www.iea.org/commentaries/is-carbon-capture-too-expensive`
            },
            {
                quote: `Carbon capture, utilisation and storage (CCUS) technologies are critical for putting energy systems around the world on a sustainable path. Despite the importance of CCUS for achieving clean energy transitions, deployment has been slow to take off – there are only around 20 commercial CCUS operations worldwide. But momentum is building. Plans for more than 30 commercial CCUS facilities have been announced in recent years, and despite the Covid‑19 crisis, in 2020 governments and industry committed more than USD 4.5 billion to CCUS. A number of factors can explain the slow uptake of CCUS, but high cost is one of the most frequently heard. Commentators often cite CCUS as being too expensive and unable to compete with wind and solar electricity given their spectacular fall in costs over the last decade, while climate policies – including carbon pricing – are not yet strong enough to make CCUS economically attractive`
            }
        ]
    },
    {
        id: 27,
        clicked: false,
        start: 517,
        end: 543,
        claim: `Some argue that a move away  from capitalism is the only solution to this mess, others insist that markets should be even freer, without any interventions like subsidies and some suggest that we need what’s referred to as “degrowth” and to cut back as a species overall. But the truth is at least as of now, no political system is doing an impressive job at becoming truly sustainable and none have really done so in the past. `,
        evidence: [
            {
                commentary: `We are aware that this is a very sensitive topic and people naturally have different opinions on how to deal with climate change. We tried to provide some context for some proposed solutions. This overview does not claim to be exhaustive however.`
            },
            {
                commentary: `There are ‘market-based approaches’ that add a carbon cost to consumer products and hope that companies will be incentivized to reduce those costs, which helps the climate. `
            },
            {
                source: `Market-Based Strategies, C2ES, 2019`
            },
            {
                link: `https://www.c2es.org/content/market-based-strategies/ `
            },
            {
                quote: `Market-based strategies help fight climate change by putting an explicit price on carbon emissions and spurring businesses to find cost-effective ways to reduce those emissions. The costs of climate impacts – such as higher sea levels and more frequent and severe heat waves, droughts, wildfires, and downpours – are not reflected in the price of goods and services that emit greenhouse gases. Putting a price on those emissions gives businesses an incentive to reduce them. By giving them flexibility to choose the most economical way to reduce emissions, rather than mandating one approach, pricing also encourages businesses to innovate.`
            },
            {
                commentary: `On the other hand, there are calls to nationalize certain industries to enforce climate priorities.`
            },
            {
                source: `Nationalize the Fossil Fuel Industry, In These Times, 2017`
            },
            {
                link: `https://inthesetimes.com/article/nationalize-the-fossil-fuels-industry-carbon `
            },
            {
                quote: `How do we break this vicious cycle of inevitable extraction in time? We need systemic solutions that address this dynamic of profit and control head-on and rapidly phase out fossil fuel production. Some people are willing to take the chance that such production will become unfashionable or even unprofitable as the costs of renewables continues to drop. But the most direct and only guaranteed way to do so is to change the rules of the game by taking control of U.S. fossil fuel reserves out of corporate hands through nationalization.`
            },
            {
                commentary: `A completely different path is advocated by ‘degrowth’ groups. They argue that we cannot both continue to consume more resources and also protect our planet from environmental damage; the solution is instead to limit and even reverse our growth. `
            },
            {
                source: `Growth damages the climate. We need new paths to prosperity, Degrowth, 2020`
            },
            {
                link: `https://www.degrowth.info/en/2020/04/growth-damages-the-climate-we-need-new-paths-to-prosperity/ `
            },
            {
                quote: `The dream of green growth thus continues to be a fairy tale. And even if we assume that more growth will be possible without any further emissions, the problem is far from being solved. After all, the target of limiting global warming to 1,5°C is not about keeping emissions constant, but about reducing them to net-zero by 2050. According to the latest IPCC report, today’s technologies can only achieve this if we significantly reduce the overall production and consumption of the economy. Climate policy that effectively reduces emissions is therefore automatically in conflict with the goal of growth. Or to put it the other way around: climate policy that doesn’t confront economic growth will most likely not be effective.`
            }
        ]
    },
    {
        id: 28,
        clicked: false,
        start: 543,
        end: 567,
        claim: `We also don’t have the time to figure this out and do a lot of experiments. We must implement solutions now. Not just to halt the release of all possible greenhouse gases, but also to start reducing the amount of CO2 in the air. It’s too late to just mend our ways, we have to actively correct our past mistakes. With every year we waste, more extreme changes will be unavoidable.  `,
        evidence: [
            {
                commentary: `An effort to more precisely estimate the remaining ‘carbon budget’ available to us before certain temperature increases are locked in, finds that we do not have many years to implement emissions-reducing strategies.`
            },
            {
                commentary: `We could emit another 440 billion tons of CO2 before global average temperatures increase by 1.5°C. For comparison, we are currently emitting over 40 billion tons of CO2 per year. `
            },
            {
                source: `An integrated approach to quantifying uncertainties in the remaining carbon budget, H. Damon Matthews et al., 2021`
            },
            {
                link: `https://www.nature.com/articles/s43247-020-00064-9`
            },
            {
                quote: `We estimate a median TCRE [Transient Climate Response to Cumulative CO2 Emissions] of 0.44 °C and 5–95% range of 0.32–0.62 °C per 1000 GtCO2 emitted. Considering only geophysical uncertainties, our median estimate of the 1.5 °C remaining carbon budget is 440 GtCO2 from 2020 onwards, with a range of 230–670 GtCO2, (for a 67–33% chance of not exceeding the target). Additional socioeconomic uncertainty related to human decisions regarding future non-CO2 emissions scenarios can further shift the median 1.5 °C remaining carbon budget by ±170 GtCO2.`
            }
        ]
    },
    {
        id: 29,
        clicked: false,
        start: 618,
        end: 631,
        claim: `The quickest way to cut CO2 emissions would be if all rich populations on Earth drastically changed their lifestyles and if the people on the rise would not seek to achieve it. Favouring the climate over comfort and wealth. `,
        evidence: [
            {
                commentary: `Even within a prosperous and polluting country like the United States, differences in household income reveal a massive gap in the amounts of CO2 released. It means that the reduction in CO2 emissions must come from the wealthiest households.`
            },
            {
                source: `Scale, distribution and variations of global greenhouse gas emissions driven by U.S. households, Kaihui Song et al., 2019`
            },
            {
                link: `https://www.sciencedirect.com/science/article/pii/S0160412019315752?via%3Dihub   `
            },
            {
                quote: `The per capita carbon footprint also generally increases with household income, ranging from 12.1 to 28.6 tCO2eq/cap, as shown in Fig. 3b. Consumers with less than $30,000 annual household income consists of 25.7% of the total population but were only responsible for 19.3% of the carbon footprint. On the other hand, wealthy consumers with more than $100,000 annual household income accounted for 22.3% of the total population but were responsible for 31.2% of the total carbon footprint of the U.S. household consumption. As income increases, the share of carbon footprint from “consumption” of services increases.`
            },
            {
                quote: `/images/per-capita-footprint-income.png`
            }
        ]
    },
    {
        id: 30,
        clicked: false,
        start: 634,
        end: 647,
        claim: `But we’ve just witnessed a global experiment in staying at home, not using transport and consuming less during the coronavirus pandemic. And all it did was reduce CO2 emissions by 7% for 2020. `,
        evidence: [
            {
                commentary: `Lockdowns around the world, coupled with economic downturns, meant that people reduced their carbon emissions. They took less transports, bought less products and didn’t use commercial spaces like office buildings. At the peak of lockdowns in April 2020, we were releasing 19% less CO2 than the previous year. However, the 2020 average reduction in CO2 emissions was only 7% less. `
            },
            {
                source: `Fossil CO2 emissions in the post-COVID-19 era, Corinne Le Quéré et al., 2021`
            },
            {
                link: `https://www.nature.com/articles/s41558-021-01001-0`
            },
            {
                quote: `Global fossil CO2 emissions have decreased by around 2.6 GtCO2 in 2020 to 34 GtCO2 (Fig. 1). This projected decrease, caused largely by the measures implemented to slow the spread of the COVID-19 pandemic, is about 7% below 2019 levels, according to the analysis of the Global Carbon Project1 on the basis of multiple studie and recent monthly energy data`
            },
            {
                quote: `/images/global-fossil-fuel-emissions.png`
            },
            {
                commentary: `The chart in the video is based on:`
            },
            {
                source: `COVID curbed carbon emissions in 2020 — but not by much, Nature, 2021`
            },
            {
                link: `https://www.nature.com/articles/d41586-021-00090-3`
            },
            {
                quote: `/images/emissions-bounce-back.png`
            }
        ]
    },
    {
        id: 31,
        clicked: false,
        start: 647,
        end: 677,
        claim: `Asking average people to solve rapid climate change breaks down when we look at the scale of the problem. Personal contributions toward reducing greenhouse gas emissions are nice, but they are dwarfed by the systemic reality of global emissions. The concept of your personal carbon footprint was popularized by the oil producer BP in a 2005 ad campaign. Arguably one of the most effective and sinister pieces of propaganda that still seriously distracts all of us from the reality of the situation.`,
        evidence: [
            {
                commentary: `The concept of a personal carbon footprint is not false, and it does have its part to pay in combating climate change. However, using it to absolve the biggest polluters of their responsibility is wrong.`
            },
            {
                source: `The carbon footprint sham, Mashable, retrieved 2021`
            },
            {
                link: `https://mashable.com/feature/carbon-footprint-pr-campaign-sham/?europe=true`
            },
            {
                quote: `British Petroleum, the second largest non-state owned oil company in the world, with 18,700 gas and service stations worldwide, hired the public relations professionals Ogilvy & Mather to promote the slant that climate change is not the fault of an oil giant, but that of individuals. It’s here that British Petroleum, or BP, first promoted and soon successfully popularized the term “carbon footprint" in the early aughts. The company unveiled its “carbon footprint calculator” in 2004 so one could assess how their normal daily life — going to work, buying food, and (gasp) traveling — is largely responsible for heating the globe.`
            }
        ]
    },
    {
        id: 32,
        clicked: false,
        start: 677,
        end: 691,
        claim: `If you eliminated 100% of your emissions for the rest of your life, you would save one second’s worth of emissions from the global energy sector. Even the most motivated person can’t even make a tiny dent.`,
        evidence: [
            {
                commentary: `The global average of per capita CO2 emissions was around 5 tons in 2017. This would add up to 360 tons over a 72 year lifetime based on global life expectancy average. This value however differs greatly from country to country. For example, the average citizen of the United States emitted around 16.2 tons of CO2 in 2017. If the same was to sustain for an average life expectancy of ~79 years of their life, they would release about 1280 tons of CO2. `
            },
            {
                source: `Per capita CO2 emissions, OWID, retrieved 2021`
            },
            {
                link: `https://ourworldindata.org/co2-emissions#per-capita-co2-emissions `
            },
            {
                quote: `/images/per-capita-emissions-2019.png`
            },
            {
                commentary: `Life expectancy info is from the following chart: `
            },
            {
                source: `OWID, 2020`
            },
            {
                link: `https://ourworldindata.org/grapher/life-expectancy-at-birth-total-years?tab=chart&country=OWID_WRL~USA~JPN`
            },
            {
                commentary: `Meanwhile, the global energy sector releases 73.2% of all global greenhouse emissions, which is 36 billion tons of CO2 per year. That’s 98.63 million tons per day, 4.11 million tons per hour or 1141 tons per second. If the average US citizen dedicated their entire life to erasing their own carbon footprint, they would compensate for roughly 1.12 seconds’ worth of the emissions of the energy sector. `
            },
            {
                source: `Sector by sector: where do global greenhouse gas emissions come from?, OWID, retrieved 2021`
            },
            {
                link: `https://ourworldindata.org/emissions-by-sector#sector-by-sector-where-do-global-greenhouse-gas-emissions-come-from `
            },
            {
                quote: `/images/Emissions-by-sector-–-pie-charts.png`
            }
        ]
    },
    {
        id: 33,
        clicked: false,
        start: 822,
        end: 856,
        claim: `It's still unrealistic that change of that scope can be forced onto a worldwide economy quickly enough, because many low carbon technologies still need a lot of time and research – which means they are expensive. But more companies will make more efficient carbon capture systems, tasty meat alternatives, better batteries, cement alternatives and so on, if there is a clear and growing demand. And if you are affluent enough, you can do your part by investing in these things right now while they're still expensive. These are the mechanisms that will drive the prices down later on.  `,
        evidence: [
            {
                commentary: `Technological progress is an important part of dealing with greenhouse gas emissions. `
            },
            {
                commentary: `There are new meat alternatives, such as lab grown or cultured meat, that cost 6 to 12 times less CO2 to produce than raising a cow. `
            },
            {
                source: `Climate Impacts of Cultured Meat and Beef Cattle, John Lynch and Raymond Pierrehumbert, 2019`
            },
            {
                link: `https://www.frontiersin.org/articles/10.3389/fsufs.2019.00005/full`
            },
            {
                quote: `/images/cultured-meat-beef-cattle.png`
            },
            {
                commentary: `The falling cost of renewable energy has been dropping rapidly and is now competitive even with the cheapest fossil fuel power sources.`
            },
            {
                source: `Renewable Power Generation Costs in 2019, IRENA, 2020`
            },
            {
                link: `https://www.irena.org/publications/2020/Jun/Renewable-Power-Costs-in-2019`
            },
            {
                quote: `/images/average-costs-electricity.png`
            },
            {
                commentary: `There is even a new sort of ‘green cement’ that promises to absorb CO2 during its production rather than release it.`
            },
            {
                source: `New Developments: Environmentally Friendly Concrete, Sustainable Build, 2021`
            },
            {
                link: `http://www.sustainablebuild.co.uk/environmentally-friendly-concrete.html`
            },
            {
                quote: `Scientists at a British concrete manufacturer, the London-based Novacem, claim to have developed a new form of concrete that effectively absorbs large amounts of carbon dioxide as it hardens. Novacem's new version of concrete, uses a different raw material, magnesium sulphate, which requires much less heating. Novacem claim that each tonne of cement can absorb up to 0.6 tonnes of CO2. This is opposed to figures that claim that each tonne of old style cement emits about 0.4 tonnes of CO2.`
            },
            {
                commentary: `There are many other low-carbon technologies in which a lot of funding and research is flowing in. One example is green hydrogen. Germany for example allocated its largest share of green energy stimulus funds to it last year. Hydrogen can replace current high-carbon in many areas as fuel. It could be able to meet a big chunk of industrial energy demand, used in hydrogen-powered transport or as an energy storage medium that allows for renewable energy to be stored in a supply-based and flexible manner or hydrogen produced with green electricity might be used for heating homes. `
            },
            {
                source: `Jim Robbins, Green Hydrogen: Could It Be Key to a Carbon-Free Economy?, 2020`
            },
            {
                link: `https://e360.yale.edu/features/green-hydrogen-could-it-be-key-to-a-carbon-free-economy`
            },
            {
                quote: `In Australia, the University of New South Wales, in partnership with a global engineering firm, GHD, has created a home-based system called LAVO that uses solar energy to generate and store green hydrogen in home systems. The hydrogen is converted back into electricity as needed.`
            },
            {
                source: `The National Hydrogen Strategy, Federal Ministry for Economic Affairs and Energy, 2020`
            },
            {
                link: `https://www.bmz.de/en/development-policy/green-hydrogen`
            },
            {
                quote: `In order to seize this opportunity for industry and put Germany at the vanguard of green hydrogen, the German government has published a National Hydrogen Strategy(External link) (PDF) and an action plan. The purpose of the strategy is to foster the production of affordable climate-neutral hydrogen and to make Germany a global provider of state-of-the-art hydrogen technology. Pilot projects for the production of green hydrogen are to be implemented in the BMZ's partner countries.`
            },
            {
                commentary: `High-quality recycle-materials that could replace oil-based plastic production. `
            },
            {
                source: `European Commission Joint Research Centre, Heat and power from biomass, Technology development report 2020`
            },
            {
                link: `https://op.europa.eu/en/publication-detail/-/publication/8f6c8de2-6505-11eb-aeb5-01aa75ed71a1/language-en`
            },
            {
                quote: `The European Commission presented the ‘European Green Deal’ in December 2019 to make EU a climate-neutral economy by 2050 (COM(2019) 640). In order to move to a clean, circular economy and stop climate change, the EU Green Deal provides a roadmap with actions to boost the efficient use of resources. Bioenergy, as part of a circular bioeconomy, could have an essential contribution to reach climate neutrality by 2050, enabling higher shares of renewables in the energy grids through high efficiency heat and power generation and enabling negative emissions through carbon capture, utilisation and storage. Besides contributing to greenhouse gas reduction, bioenergy brings additional social, environmental and economic benefits to agriculture, forestry and other industrial sectors, driving rural development, in the context of sustainable development.`
            },
            {
                source: `Ocean energy Europe, 2021`
            },
            {
                link: `https://www.oceanenergy-europe.eu/`
            },
            {
                quote: `The oceans are the world’s largest untapped source of renewable energy. By 2050, ocean energy can provide 10% of Europe’s current electricity needs and 400,000 jobs, and is all set to become a new European industry. Ocean energy technologies exploit the power of tides and waves, as well as differences in sea temperatures and salinity, to produce electricity. The primary types of ocean energy are: Tidal Stream, Wave Energy, OTEC &SWAC and Tidal Range`
            }
        ]
    }
]