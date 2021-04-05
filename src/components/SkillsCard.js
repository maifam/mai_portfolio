import Grid from '@material-ui/core/Grid';

function SkillsCard({skillCard}) {

    return (

        <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
                <div>
                    <h1>{skillCard.name}</h1>
                    <img src={skillCard.logo} alt={skillCard.name}></img>
                </div>
            </Grid>
        </Grid>
    );
  }
  
  export default SkillsCard;