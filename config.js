var config = {
    style: 'mapbox://styles/antievictionmap/ckr5hn2up01ry18mv2p69uzd2/draft',
    accessToken: 'pk.eyJ1IjoiYW50aWV2aWN0aW9ubWFwIiwiYSI6ImNrcjJiOHh0ejJhMzQzMHJ1dm5qeGVoNmwifQ.OGgibAmAOYtq9uVpZYGRgw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Los Angeles Citywide Nuisance Abatement Program',
    subtitle: 'Effects of CNAP in Los Angeles',
    byline: 'Institute of Inequality and Democracy',
    footer: 'Source: AEMP',
    chapters: [
        {
            id: 'intro-a',
            alignment: 'center',
            hidden: false,
            title: 'Introduction',
            description: 'The Los Angeles Citywide Nuisance Abatement Program (CNAP) allows the City Attorney to sue property owners of “nuisance” buildings and mandate owners to install surveillance, evict tenants, or even close down the property. The program binds together housing and policing, often in service of redevelopment and gentrification. ',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: '',
                    opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: '',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'intro-b',
            alignment: 'center',
            hidden: false,
           image: 'images/rocky.jpeg',
            description: '<i><small><center> Image: Rocky Delgadillo - LA City Attorney 2001-2009 </center></small></i> <br> Rocky Delgadillo closely supervised CNAP as City Attorney from 2001-2009. Now, as a real estate sector lawyer, he advises clients who are keen to invest in neighborhoods that have “good bones” but that were once “controlled by gangs.” ',
            location: {
                center: [-118.24254, 34.05369],
                zoom: 17.70,
                pitch: 60.00,
                bearing: 127.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'city_hall',
                    opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'city_hall',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'intro-c',
            alignment: 'center',
            hidden: false,
            description: 'This story map dives into the story of four CNAP properties to understand both how the program has deeply impacted tenants on the properties, as well as organization and resistance to the program. ',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'CNAP',
                    opacity: 1
                 },
                 {
                    layer: 'CNAP_cases',
                    opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'CNAP',
                     opacity: 0
                 },
                 {
                    layer: 'CNAP_cases',
                    opacity: 0
                }
            ]
        },
        {
            id: 'intro-x',
            alignment: 'center',
            hidden: true,
            location: {
                center: [-118.27242, 34.00847],
                zoom: 11.0,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'CNAP',
                    opacity: 1
                 },
                 {
                    layer: 'CNAP_cases',
                    opacity: 1
                 },
                 {
                    layer: 'CNAP_cases_labels',
                    opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'CNAP',
                     opacity: 0
                 },
                 {
                    layer: 'CNAP_cases',
                    opacity: 0
                },
                {
                   layer: 'CNAP_cases_labels',
                   opacity: 0
               }
            ]
        },
        {
            id: '69th-Main-a',
            alignment: 'left',
            hidden: false,
            title: '69th and Main',
            description: 'In 2004, City Attorney Rocky Delgadillo filed a landmark lawsuit on three apartment buildings at 69th and Main, alleging that the complex served as gang headquarters for the 69 East Coast Crips for more than 20 years.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 11.0,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: '69_main_overview',
                    opacity: 1
                 },
                 {
                    layer: '69_main_label',
                    opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: '69_main_overview',
                     opacity: 0
                 },
                 {
                    layer: '69_main_label',
                    opacity: 0
                }
            ]
        },
        {
            id: '69th-Main-b',
            alignment: 'left',
            hidden: false,
            subttitle: '<i> Racialized Policing',
            image: 'images/69_language.png',
            description: '<i><small><center> Image: CNAP Injunction </center></small></i> <br> The language used in the lawsuit to justify this injunction is sensational and heavily racialized. <blockquote> <b> “The use of the Apartments by the Crips has turned the surrounding community into an urban gang war zone and poses a clear and present danger to the community.” </b></blockquote>',
            location: {
                center: [-118.27665, 33.97609],
                zoom: 16.17,
                pitch: 53.50,
                bearing: -28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: '69_main',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: '69_main',
                opacity: 0
            }
        ]
        },
        {
            id: '69th-Main-c',
            alignment: 'left',
            hidden: false,
            subtitle: '<i>Closure and Relocation',
            image: 'images/69_demo.png',
            description: '<i><small><center> Image: 69th and Main Demolition </center></small></i> <br> This was the first case that closed down a property through a preliminary injunction, completely vacating its units and disallowing renting to new tenants. Having been involved in the property’s closure, Councilwoman Jan Perry’s office had to secure emergency funding for the tenants displaced during the closure.',
            location: {
                center: [-118.27665, 33.97609],
                zoom: 16.17,
                pitch: 53.50,
                bearing: -28
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: '69_main',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: '69_main',
                opacity: 0
            }
        ]
        },
        {
            id: '69th-Main-d',
            alignment: 'left',
            hidden: false,
            subtitle: '<i> Redevelopment',
            image: 'images/69_render.png',
            description: '<i><small><center> Image: 69th and Main Redevelopment Rendering </center></small></i> <br>The Community Redevelopment Agency purchased the properties at 69th and Main in 2006 for redevelopment into townhomes, and demolition was underway by 2007. The property lay vacant for more than a decade, through the dissolution of the CRA. In 2018, ownership was transferred to the City of Los Angeles, which used the site for a permanent supportive housing development funded through Proposition HHH, opened in 2020.',
            location: {
                center: [-118.27665, 33.97609],
                zoom: 16.17,
                pitch: 53.50,
                bearing: -28
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: '69_main',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: '69_main',
                opacity: 0
            }
        ]
        },
        {
            id: 'racial-policing-a',
            alignment: 'center',
            hidden: false,
            title: 'Nuisance Abatement and Racialized Policing',
            description: 'While the CNAP program applies to the entire City of Los Angeles, the city attorney has overwhelmingly filed nuisance abatement complaints on properties located in predominantly Black and Latinx neighborhoods.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            }
        ]
        },
        {
            id: 'racial-policing-b',
            alignment: 'center',
            hidden: false,
            description: '[Legend]',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             },
             {
                layer: 'race_county',
                opacity: 0.75
             }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {
                layer: 'race_county',
                opacity: 0
            }
        ]
        },
        {
            id: 'racial-policing-x',
            alignment: 'center',
            hidden: true,
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             },
             {
                layer: 'race_county',
                opacity: 0.75
             }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {
                layer: 'race_county',
                opacity: 0
            }
        ]
        },
        {
            id: 'racial-policing-c',
            alignment: 'center',
            hidden: false,
            description: 'The City Attorney provides little determination about how CNAP properties are chosen, relying nearly entirely on LAPD discretion, revealed in legal documents to be based heavily on race. CNAP creates another layer of policing in already heavily policed neighborhoods of Los Angeles.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             },
             {  layer: 'race_county',
                opacity: 0.75
            }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {   layer: 'race_county',
                opacity: 0
            }
            ]
        },
        {
            id: 'frontier-a',
            alignment: 'right',
            hidden: false,
            title: 'Frontier Hotel',
            image: 'images/rosslyn.jpeg',
            description: '<i><small><center> Image: Frontier Hotel, now Rosslyn Lofts </center></small></i> <br> Frontier Hotel was a famous Single Room Occupancy (SRO) hotel located in Skid Row and was home to many families, including LA CAN organizer Steve Diaz. This was one of the first properties placed under a CNAP injunction, establishing precedent for future policing and redevelopment of other SROs. ',
            location: {
                center: [-118.19236, 34.05574],
                zoom: 11.69,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'frontier_overview',
                opacity: 1
             },
             {
                layer: 'frontier_label',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'frontier_overview',
                opacity: 0
            },
            {
                layer: 'frontier_label',
                opacity: 0
            }
        ]
        },
        {
            id: 'frontier-b',
            alignment: 'right',
            hidden: false,
            subtitle: '<i> Embedded Policing',
            description: 'The property was placed under intense police surveillance and a nuisance abatement injunction was filed against the hotel owners in 2003. In a striking example of police control, the final judgement allowed the LAPD to the hotel as a police substation for four years. ',
            location: {
                center: [-118.24550, 34.04619],
                zoom: 16.17,
                pitch: 60.00,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'frontier',
                opacity: 1
             },
            ],
            onChapterExit: [{
                layer: 'frontier',
                opacity: 0
            }
        ]
        },
        {
            id: 'frontier-c',
            alignment: 'right',
            hidden: false,
            subtitle: '<i> Redevelopment',
            description: '<i><small><center> Image: Frontier Hotel, now Rosslyn Lofts </center></small></i> <br> The California Redevelopment Agency (CRA) provided a large construction loan to a private developer, the Amerland Group, that was already under fire from housing justice movements for its harassment of tenants at another residential hotel, the Alexandria. The hotel was transformed into the Rossyln Lofts, a “mixed-income” development which presents itself as located in the “heart of historic Downtown Los Angeles.” ',
            image: 'images/rosslyn.jpeg',
            location: {
                center: [-118.24550, 34.04619],
                zoom: 16.17,
                pitch: 60.00,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'frontier',
                opacity: 1
             },
            ],
            onChapterExit: [{
                layer: 'frontier',
                opacity: 0
            }
        ]
        },
        {
            id: 'frontier-d',
            alignment: 'right',
            hidden: false,
            subtitle: '<i> Organizing',
            video: '<center> <iframe width="350" height="200" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"> </iframe>',
            description: '<i><small><center> Image: Steve Diaz shares his story </center></small></i> <br>These CNAP injunctions and CRA development deals catalyzed Skid Row organizing led by LA CAN. As Steve Diaz puts it: “I was moved that people were actually trying to change stuff and it wasn’t that it was just me by myself or people in my building by themselves.” ', 
            location: {
                center: [-118.24550, 34.04619],
                zoom: 16.17,
                pitch: 60.00,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'frontier',
                opacity: 1
             },
            ],
            onChapterExit: [{
                layer: 'frontier',
                opacity: 0
            }
        ]
        },
        {
            id: 'redevelopment-a',
            alignment: 'center',
            hidden: false,
            title: 'CNAP as Redevelopment Tool',
            description: 'In many cases, the end result of a CNAP injunction is the sale and potential redevelopment of the property.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            }
        ]
        },
        {
            id: 'redevelopment-b',
            alignment: 'center',
            hidden: false,
            description: 'Nearly half of CNAP properties in the dataset were sold at least once after the injunction.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             },
             {  layer: 'CNAP_owner',
                opacity: 1
            }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {   layer: 'CNAP_owner',
                opacity: 0}
        ]
        },
        {
            id: 'redevelopment-x',
            alignment: 'center',
            hidden: true,
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             },
             {  layer: 'CNAP_owner',
                opacity: 1
            }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {   layer: 'CNAP_owner',
                opacity: 0}
        ]
        },
        {
            id: 'redevelopment-c',
            alignment: 'center',
            hidden: false,
            description: 'While developers are not explicitly involved in the CNAP lawsuits, the resulting property sales transform often desirable nuisance properties into more profitable developments. Residents are evicted or relocated in this process, effectively banished from their community by the CNAP injunction.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             },
             {  layer: 'CNAP_owner',
                opacity: 1
            }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {   layer: 'CNAP_owner',
                opacity: 0}
        ]
        },
        {
            id: '109-a',
            alignment: 'left',
            hidden: false,
            title: '607 E 109th Place',
            description: '607 E 109th Place is an eight-unit property in the Green Meadows Neighborhood of South Central. A CNAP complaint was filed in April 2015, resulting in intensive surveillance and housing precarity for the residents.',
            location: {
                center: [-118.37718, 33.95],
                zoom: 10.77,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: '109_overview',
                opacity: 1
             },
             {
                layer: '109_label',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: '109_overview',
                opacity: 0
            },
            {
                layer: '109_label',
                opacity: 0
             }
        ]
        },
        {
            id: '109-b',
            alignment: 'left',
            hidden: false,
            subtitle: '<i> Surveillance',
            description: '<i><small><center> Image: House rules displayed on the property </center></small></i> <br>As mandated by the injunction, video surveillance was required to “observe the identity and activity of all individuals entering, leaving, and moving around the property.” Still, the perpetual gaze in the form of video technology was not enough as unlimited physical access was granted to LAPD to conduct “regular and frequent” foot patrols devoid of any reason or warrant.',
            image: 'images/109_sign.png',
            location: {
                center: [-118.26601, 33.93542],
                zoom: 16.33,
                pitch: 60.00,
                bearing: -91.37
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: '109',
                opacity: 1
             },
            ],
            onChapterExit: [{
                layer: '109',
                opacity: 0
            }
        ]
        },
        {
            id: '109-c',
            alignment: 'left',
            hidden: false,
            subtitle: '<i> House Rules',
            description: 'Finally, the enactment of draconian house rules that included: requiring residents to disclose the names of all household members on an ongoing basis even if the household composition has not changed, visitors obligated to sign in with the manager immediately upon entry of the property, and visitors must always remain accompanied while on the premises, made any alleged violation incurable—guaranteeing eviction.',
            location: {
                center: [-118.26601, 33.93542],
                zoom: 16.33,
                pitch: 60.00,
                bearing: -91.37
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: '109',
                opacity: 1
             },
            ],
            onChapterExit: [{
                layer: '109',
                opacity: 0
            }
        ]
        },
        {
            id: '109-d',
            alignment: 'left',
            hidden: false,
            subtitle: '<i> Eviction',
            description: 'A senior tenant who spent their entire life residing at the property was evicted from their home of nearly 50 years several months after CNAP due to an alleged nuisance activity connected their granddaughter’s guest.',
            location: {
                center: [-118.26601, 33.93542],
                zoom: 16.33,
                pitch: 60.00,
                bearing: -91.37
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: '109',
                opacity: 1
             },
            ],
            onChapterExit: [{
                layer: '109',
                opacity: 0
            }
        ]
        },
        {
            id: 'surveillance-a',
            alignment: 'center',
            hidden: false,
            title: 'Surveillance at CNAP Properties',
            description: 'CNAP properties are subject to increased surveillance, before and after the formal injunction. Many properties were subject to increased surveillance under previous programs, such as gang injunctions or FALCON. ',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             },
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            }
        ]
        },
        {
            id: 'surveillance-b',
            alignment: 'center',
            hidden: false,
            description: 'Of the CNAP properties where we have surveillance information, 90% were surveilled for over a year and half for at least two years. Some properties have been under increased surveillance for over a decade.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             },
             {  layer: 'CNAP_surveil',
                opacity:1
            }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {   layer: 'CNAP_surveil',
                opacity: 0}
        ]
        },
        {
            id: 'surveillance-x',
            alignment: 'center',
            hidden: true,
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             },
             {  layer: 'CNAP_surveil',
                opacity:1
            }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {   layer: 'CNAP_surveil',
                opacity: 0}
        ]
        },
        {
            id: 'surveillance-c',
            alignment: 'center',
            hidden: false,
            description: 'CNAP increases policing and surveillance around the properties, invading the privacy of residents while increasing chances of arrest and eviction.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             },
             {  layer: 'CNAP_surveil',
                opacity:1
            }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {   layer: 'CNAP_surveil',
                opacity: 0}
        ]
        },
        {
            id: 'chesapeake-a',
            alignment: 'right',
            hidden: false,
            title: 'Chesapeake Apartments',
            description: 'The Chesapeake Apartments is 425-unit complex in the Baldwin Village neighborhood of Los Angeles. A CNAP injunction was filed against the property owner in November 2017, placing the property under surveillance, instituting house rules, and evicting tenants. Unlike similar CNAP cases, Chesapeake residents formed a tenant association and intervened in the lawsuit against their property owner. ',
            location: {
                center: [-118.27252, 34.00935],
                zoom: 11.21,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'chesapeake_overview',
                opacity: 1
             },
             {
                layer: 'chesapeake_label',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'chesapeake_overview',
                opacity: 0
            },
            {
                layer: 'chesapeake_label',
                opacity: 0
             }
        ]
        },
        {
            id: 'chesapeake-b',
            alignment: 'right',
            hidden: false,
            subtitle: '<i> House Rules',
            description: '<i><small><center> Image: Zerita Jones shares her story </center></small></i> <br>Zerita Jones, a tenant of Chesapeake and leader of the tenant association, describes the house rules mandated by the 2017 injunction.',
            image: 'images/zerita.png',
            location: {
                center: [-118.34569, 34.01919],
                zoom: 16.00,
                pitch: 60.00,
                bearing: 39.84
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'chesapeake',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'chesapeake',
                opacity: 0
            }
        ]
        },
        {
            id: 'chesapeake-c',
            alignment: 'right',
            hidden: false,
            subtitle: '<i> Organizing',
            description: 'A tenants association formed in response to these harsh rules, and for the first time, tenants intervened in the CNAP lawsuit. The residents won less strict house rules and prohibited the property owner from removing units from the rental market for four years. After their success, the TA is considering suing the property owner for maintenance issues on the building or turning the complex into a tenant-owned co-op.',
            location: {
                center: [-118.34569, 34.01919],
                zoom: 16.00,
                pitch: 60.00,
                bearing: 39.84
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'chesapeake',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'chesapeake',
                opacity: 0
            }
        ]
        },
        {
            id: 'palmas-a',
            alignment: 'left',
            hidden: false,
            title: 'Las Palmas Motel',
            description: '<i><small><center> Image: Las Palmas Motel </center></small></i> <br> The City Attorney’s Office filed a CNAP complaint for the Las Palmas Motel, a 10-room motel located in South Central Los Angeles providing both short-term lodging and longer-term housing at low costs. Having documented surveillance since 2004, the case filing alleges that the property was a “notorious stronghold and refuge for members and associates of the Florencia 13 criminal street gang.”',
            image: 'images/palmas.png',
            location: {
                center: [-118.20069, 33.97923],
                zoom: 11.53,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'palmas_overview',
                opacity: 1
             },
             {
                layer: 'palmas_label',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'palmas_overview',
                opacity: 0
            },
            {
                layer: 'palmas_label',
                opacity: 0
             }
        ]
        },
        {
            id: 'palmas-b',
            alignment: 'left',
            hidden: false,
            subtitle: '<i> Surveillance',
            description: '<i><small><center> Image: Language from the CNAP injunction </center></small></i> <br>Like many CNAP cases, the preliminary injunction ordered the property owner to install a video-monitoring system accessible by the LAPD through an internet feed and compatibility with mobile applications, detailed screening and registration of all guests and their vehicles, and armed and licensed security guards. Even further, the final injunction includes additional requirements such that the LAPD can have access to the property.',
            image: 'images/palmas_snip.png',
            location: {
                center: [-118.27270, 33.96895],
                zoom: 16.65,
                pitch: 60.00,
                bearing: -45.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'palmas',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'palmas',
                opacity: 0
            }
        ]
        },
        {
            id: 'palmas-c',
            alignment: 'left',
            hidden: false,
            subtitle: '<i> Banishment',
            description: '<i><small><center> Image: List of people banished from Las Palmas </center></small></i> <br> The final injunction also includes a list of 30 individuals to be banned from the property based on allegations of participation in nuisance activities on site. <em> Note: We refuse to further participate in the surveillance state and have chosen to strike out the names of the people banished from the property.</em>',
            image: 'images/palmas_list.png', 
            location: {
                center: [-118.27270, 33.96895],
                zoom: 16.65,
                pitch: 60.00,
                bearing: -45.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'palmas',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'palmas',
                opacity: 0
            }
        ]
        }

    ]
};
