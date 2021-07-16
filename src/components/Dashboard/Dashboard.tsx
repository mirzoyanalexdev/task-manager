import Header from "./Header/Header"
import {Container, Grid} from "@material-ui/core"
import Card from "../Card/Card"

const Dashboard:React.FC = () => {
    return(
        <Container fixed>
            <Grid
                container
                item
                direction="column"
            >
                <Grid>
                    <Header/>
                </Grid>
                <Grid>
                    <Card/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dashboard