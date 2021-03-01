import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { GridList, GridListTile } from '@material-ui/core';
import { decrement, increment } from '../../redux/reducers/itemCounterSlice';
import store from '../../redux/store/store';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ cards, itemCounter }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <GridList cols={3}>
      {cards.map((card, index) => {
        return (
          <GridListTile key={index}>
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {card.id}
                  {/* be{bull}nev{bull}o{bull}lent */}
                </Typography>
                <Typography color="textSecondary">{card.name}</Typography>
                <Typography variant="body2" component="p">
                  {/* {card.id && itemCounter[card.id] && itemCounter[card.id]} */}
                  {card.id && (
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => store.dispatch(increment(card))}
                    >
                      Add to cart
                    </Button>
                  )}

                  {card.id && itemCounter[card.id] && (
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => store.dispatch(decrement(card))}
                    >
                      Remove from cart
                    </Button>
                  )}
                  <br />
                  {card.id && itemCounter[card.id] && itemCounter[card.id]}
                  {card.id ? 'items in cart' : "Shop By Category"}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium" onClick={() => card.onSelectCategory()}>
                  {card.category}
                </Button>
              </CardActions>
            </Card>
          </GridListTile>
        );
      })}
    </GridList>
  );
}