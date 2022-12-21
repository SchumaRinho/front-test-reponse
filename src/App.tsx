import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Button, Divider, Flex, UnorderedList, ListItem, Spacer, Grid } from "@chakra-ui/react";

function App() {
    const [gens, setGens] = useState([
        {
            name: "Alain Térieur",
            age: "12",
            description:
                "Fruitcake chocolate cake icing toffee marshmallow jujubes sweet shortbread jujubes. Biscuit jelly-o pudding bear claw lemon drops biscuit cupcake chocolate bar. Powder cake soufflé biscuit bonbon. Halvah topping powder marshmallow sugar plum macaroon pie. Candy tiramisu dessert powder sugar plum cookie brownie. Danish apple pie gummies marzipan topping marzipan cheesecake.",
        },
        {
            name: "Alain Verse",
            age: "24",
            description:
                "Jujubes liquorice tart halvah fruitcake croissant. Tart wafer toffee cake marzipan tart. Icing gingerbread dessert sweet cake carrot cake. Powder cookie sweet dessert dragée topping cotton candy apple pie. Cheesecake muffin jujubes jujubes carrot cake soufflé. Ice cream sesame snaps jujubes brownie sugar plum jelly. Jelly-o toffee jelly beans bonbon biscuit oat cake muffin. Dessert shortbread cotton candy donut bonbon tootsie roll marshmallow donut halvah. Apple pie chupa chups cotton candy marzipan sweet roll sweet.",
        },
        {
            name: "Alban Bou",
            age: "1",
            description:
                "Bear claw sesame snaps lemon drops candy canes wafer jujubes topping gummi bears. Gummi bears marshmallow ice cream biscuit gummi bears brownie. Bear claw donut sweet roll pastry lollipop tart gummies candy. Gingerbread cotton candy jelly biscuit chocolate cake jelly. Shortbread cookie liquorice marshmallow jelly beans chocolate cheesecake. Croissant jujubes fruitcake icing marshmallow sugar plum. Soufflé sugar plum cake cupcake wafer croissant tiramisu powder. Topping icing icing dragée dragée jelly beans jujubes carrot cake. Shortbread soufflé candy lemon drops sweet roll muffin apple pie biscuit cake.",
        },
        {
            name: "Albert Ichon",
            age: "12",
            description:
                "Candy lemon drops jelly-o pudding sesame snaps. Shortbread cotton candy gummies gummies liquorice. Jelly-o chocolate cake jujubes candy powder toffee brownie gummies. Candy tootsie roll bonbon powder chocolate icing. Cheesecake liquorice muffin gingerbread pastry. Chocolate bar icing fruitcake jelly beans chocolate. Dessert bear claw apple pie sweet candy pudding pudding tiramisu jelly beans. Cake tiramisu powder pudding sesame snaps powder. Sesame snaps halvah tootsie roll tart pastry soufflé cookie.",
        },
        {
            name: "Aldo Berman",
            age: "12",
            description:
                "Chocolate dessert gummies marzipan jelly. Tart croissant muffin muffin jelly-o ice cream toffee caramels apple pie. Shortbread wafer caramels bonbon macaroon liquorice dragée jelly. Powder chocolate bar chocolate cake danish powder gummies lemon drops croissant cupcake. Soufflé lollipop jelly-o tootsie roll shortbread cake jelly-o gummi bears pudding. Bear claw apple pie cheesecake cookie halvah donut muffin lemon drops. Halvah pudding sesame snaps ice cream chupa chups.",
        },
        {
            name: "Édith Orial",
            age: "34",
            description:
                "Halvah lollipop marzipan jelly-o chocolate cake. Gummi bears jelly-o shortbread croissant caramels sweet sesame snaps. Chocolate cake chocolate bar soufflé candy canes tart. Cookie soufflé cake gummies sesame snaps oat cake icing tart. Fruitcake sweet roll caramels halvah tootsie roll. Icing ice cream fruitcake lollipop jelly-o danish marshmallow danish chupa chups. Caramels marzipan jelly beans topping lollipop tootsie roll. Pastry danish apple pie tiramisu oat cake jelly-o. Halvah pie danish muffin dessert. Oat cake jelly-o bonbon icing candy canes brownie icing.",
        },
        {
            name: "Edmond Fils",
            age: "45",
            description:
                "Cheesecake lollipop gingerbread chocolate tootsie roll chupa chups icing jelly fruitcake. Marzipan jelly shortbread liquorice toffee apple pie gummi bears pastry icing. Pie pie powder sesame snaps danish pastry lollipop gingerbread sugar plum. Jelly beans candy ice cream powder soufflé candy canes jujubes. Gummies lollipop liquorice brownie fruitcake chocolate gummies chocolate sesame snaps. Cupcake sesame snaps soufflé gingerbread shortbread jelly beans chocolate bar donut. Chocolate bar soufflé carrot cake croissant tootsie roll.",
        },
        {
            name: "Edmond Grec",
            age: "65",
            description:
                "Cookie candy canes powder candy canes chocolate. Tiramisu lollipop tootsie roll danish tootsie roll icing pastry jelly-o brownie. Shortbread danish dragée sugar plum lemon drops cake chocolate bar marshmallow. Apple pie bear claw icing tart macaroon. Wafer oat cake chocolate bar chocolate cake tootsie roll chocolate cake. Dessert biscuit cupcake dessert gingerbread jelly beans candy canes chocolate. Candy bear claw wafer icing macaroon carrot cake caramels cake donut. Tootsie roll lollipop brownie macaroon muffin.",
        },
        {
            name: "Lary Bambel",
            age: "23",
            description:
                "Sweet jujubes marzipan tiramisu soufflé biscuit shortbread gingerbread chocolate bar. Chupa chups pudding lemon drops lemon drops soufflé cupcake cupcake danish. Lemon drops cheesecake pie tart sweet. Oat cake jelly powder cupcake lollipop. Cotton candy chocolate cake liquorice cotton candy muffin jujubes tiramisu chocolate cake candy. Pudding jelly-o chocolate bar bonbon gummies macaroon topping.",
        },
        {
            name: "Laure Brille",
            age: "76",
            description:
                "Shortbread chocolate bar lemon drops toffee wafer cheesecake candy sweet roll. Pudding gingerbread cake tootsie roll dragée liquorice dragée cheesecake apple pie. Cupcake cake ice cream gingerbread icing. Marzipan biscuit gummi bears jujubes jelly-o dragée. Sugar plum gingerbread shortbread sweet pie powder. Candy apple pie gingerbread apple pie dragée icing. Sweet bear claw chupa chups chocolate cake oat cake halvah. Caramels bonbon powder cotton candy sweet.",
        },
        {
            name: "Laure Dure",
            age: "08",
            description:
                "Cookie lemon drops gummi bears marzipan cheesecake macaroon liquorice pudding. Carrot cake tootsie roll fruitcake liquorice chupa chups bonbon jujubes cotton candy gummies. Chocolate bar cake topping jelly-o carrot cake marshmallow. Cupcake icing cake topping marzipan. Jelly-o marshmallow donut cotton candy shortbread candy. Jelly beans dessert pudding biscuit gingerbread.",
        },
        {
            name: "Laure Édubois",
            age: "23",
            description:
                "Pie icing sugar plum caramels donut soufflé fruitcake. Candy canes oat cake icing sesame snaps brownie tart. Shortbread cupcake oat cake oat cake cheesecake icing candy sweet. Liquorice cake bear claw bonbon jelly beans bonbon jelly beans gingerbread. Fruitcake ice cream donut fruitcake donut cake sweet candy canes. Wafer dragée pudding danish tiramisu bear claw powder soufflé.",
        },
    ])

    const [profileDisplayed, setProfileDisplayed] = useState("");
    const [genderProfileDisplayed, setGenderProfileDisplayed] = useState("");
    const [sortedAscending,setSortedAscending] = useState(false)
    
    //useEffect est appelé à chaque modification du DOM. Ici on change le titre de la page
    useEffect(() => {
        document.title = profileDisplayed;
      });

    const displayProfile = (profile: string) => {
        fetch('https://api.genderize.io/?name='+profile.split(" ")[0])
        .then(res => res.json())
        .then(
            (result) => {
                setGenderProfileDisplayed(result.gender)
            },
            (error) => {
                setGenderProfileDisplayed(error)
            }
        );
        setProfileDisplayed(profile);
    };

    // métode qui retourne tous les Laure et Edmond en minuscule
    const returnLaureEtEdmond = (peoples: any): any => {
        const gensFiltered: Array<string> = [];
        peoples.forEach((v: {name: string}) => {
            const firstNAme:string = v.name.split(" ")[0];
            if (firstNAme === "Laure" || firstNAme === "Edmond") {
                var newName:string = firstNAme.toLowerCase();
                gensFiltered.push(newName);
            }
        });
        return gensFiltered;
    };

    // métode qui retourne tous les personnages den Gens
    const returnGens = (peoples: any): any => {
        let boxTable : any[]=[]
        peoples.forEach((element: {name: string, age:number}) =>{
            let color:string = String(Math.round(element.age/10)*10); //On arrondi à la dizaine
            let box: any;
            if(color==="0"){
                box = <Box p="4" bg="teal.50">{element.name}<Spacer /><Button bg='blue.200' onClick={() => displayProfile(element.name)}>Afficher</Button></Box>;
            }
            else{
                color = "teal."+color+"0" 
                box = <Box p="4" bg={color} >{element.name}<Spacer /><Button  bg='blue.200' onClick={() => displayProfile(element.name)}>Afficher</Button></Box>;
            }
            boxTable.push(box)
          })
        return boxTable;
    };

    //méthode retournant la moyenne d'age 
    const meanAge = (peoples: any): any => {
        let countAge:number = 0;
        peoples.forEach((element: {age: number}) => {
            countAge+=element.age/1;
        })
        return Math.round(countAge/peoples.length)
    };

    //méthode permettant de trier les personnes par âge (croissant/décroissant)
    const sortsByAge = () => {
        let sortedByAgeGens :any
        if(sortedAscending){
            sortedByAgeGens = gens.sort((a, b) => Number(b.age) - Number(a.age));
            setSortedAscending(false);
        }
        else{
            sortedByAgeGens = gens.sort((a, b) => Number(a.age) - Number(b.age));
            setSortedAscending(true);
        }
        setGens(sortedByAgeGens);
      };

    return (
        <Box padding={5}>
            <Box m={2}>
                Les Laures & Edmond
                <UnorderedList>
                {returnLaureEtEdmond(gens).map((name: string) => (
                    <ListItem>{name}</ListItem>
                ))}
                </UnorderedList>
            </Box>

            <Button m={2} onClick={sortsByAge}>Trier par âge</Button>

            <Flex m={2} flexDir="column" bg="blue.200" color="white" p="4">
                Profile à afficher : {profileDisplayed}
                <Box>
                    Genre:
                    {genderProfileDisplayed}
                </Box>
                <Box>
                    Description:
                    {gens.find((v) => v.name === profileDisplayed)?.description}
                </Box>
            </Flex>

            <Grid m={2} templateColumns='repeat(4, 1fr)' gap={1}>
            {returnGens(gens).map((box: any) => {
                return box
            })}          
            </Grid>

            <Divider />

            <Box m={2}>Moyenne d'age : {meanAge(gens)}</Box>
        </Box>
    );
}

export default App;
