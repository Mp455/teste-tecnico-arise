import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

export default function Details() {
  return (
    <div className="min-h-full h-[100vh] bg-gray overflow-x-auto">
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[800px] mx-auto p-8">
            <Title>Qualquer coisa</Title>
            <img
              className="max-w-[100%]"
              src="https://www.themealdb.com/images/media/meals/qysyss1511558054.jpg"
              alt=""
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
              <div>
                <strong className="font-bold">Categoria:</strong>
                Qualquer coisa
              </div>
              <div>
                <strong className="font-bold">Area:</strong>
                Qualquer coisa
              </div>
              <div>
                <strong className="font-bold">Tags:</strong>
                Qualquer coisa
              </div>
            </div>
            <div className="my-3">
              Preheat the oven to 220C/425F/Gas 7 Heat the vegetable oil in a
              large frying pan, and brown the beef all over. (You may need to do
              this in batches.) Set aside, then brown the kidneys on both sides
              in the same pan. Add the onions and cook for 3-4 minutes. Return
              the beef to the pan, sprinkle flour over and coat the meat and
              onions Add the stock to the pan, stir well and bring to the boil.
              Turn the heat down and simmer for 1½ hours without a lid. If the
              liquid evaporates too much, add more stock. Remove from the heat.
              Add salt, pepper and Worcestershire sauce and allow to cool
              completely. Place the cooked meat mixture into a pie dish. Roll
              out the pastry to 5mm/¼in thick and 5cm/2in larger than the dish
              you are using. Using a rolling pin, lift the pastry and place it
              over the top of the pie dish. Trim and crimp the edges with your
              fingers and thumb. Brush the surface with the beaten egg mixture
              and bake for 30-40 minutes until golden-brown and puffed. Serve
              with creamy mash and steamed vegetables to soak up the gravy.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold mb-2"> Ingredients</h2>
                <ul>
                  <li>Qualquer merda</li>
                  <li>Qualquer merda</li>
                  <li>Qualquer merda</li>
                  <li>Qualquer merda</li>
                  <li>Qualquer merda</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Medidas</h2>
                <ul>
                  <li>Qualquer coisa</li>
                  <li>Qualquer coisa</li>
                  <li>Qualquer coisa</li>
                </ul>
              </div>
              <div className="mt-4 col-span-1 sm:col-span-2 w-full flex justify-center gap-8">
                <div className="mr-8">
                  <Button variant="buttonCard">Youtube</Button>
                  <a
                    target="_blank"
                    className="ml-3 px-3 py-2 text-blue"
                    href="https://www.bbc.co.uk/food/recipes/steakandkidneypie_73308"
                  >
                    ssdf
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
