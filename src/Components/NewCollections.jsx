import "./NewCollections.css";
import newCollection from "../assets/new_collections";
import Items from "./items";
const NewCollections = () => {
    return (
        <div className="new-collection">
            <h1>NEW COLLECTIONS!</h1>
            <div className="collections">
                {newCollection.map(({ id, name, image, old_price, new_price }) => {
                        return (
                            <Items
                                id={id}
                                name={name}
                                image={image}
                                old_price={old_price}
                                new_price={new_price}
                                key={crypto.randomUUID()}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default NewCollections;
