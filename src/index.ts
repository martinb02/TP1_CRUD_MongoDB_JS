import { createProduct, getProducts, getProductById, getProductsByName, updateProduct, deleteProduct } from "./crud";

const main = async () => {
  let response;
  // array de argumentos -> node index.js
  const args = process.argv.slice(2);

  // definiendo parametros en código
  let action = args[0];

  switch (action) {
    case "getProducts":
      response = await getProducts();
      break;
    case "getProductById":
      response = await getProductById(args[1]);
      break;
    case "getProductsByName":
      response = await getProductsByName(args[1]);
      break;
    case "createProduct":
      const newProduct = {
        name: args[1],
        price: parseFloat(args[2]),
        description: args[3],
        category: args[4] || "general",
      };
      response = await createProduct(newProduct);
      break;
    case "updateProduct":
      // node dist/index.js updateProduct 23lk2j3k2kj3rnf name=pauli price=999.99
      // args -> updateProduct 23lk2j3k2kj3rnf name=pauli price=999.99
      // updates -> [name=pauli, price=999.99]
      const id = args[1];
      const updates = args.slice(2);

      const updatesValues: any = {};

      updates.forEach((update) => {
        // name=paula                   ->  ["name", "paula"]
        // price=999.99                 ->  ["price", "999.99"]
        const [key, value] = update.split("=");
        if (key && value) {
          updatesValues[key] = value;
        }
      });

      response = await updateProduct(id, updatesValues);
      break;
    case "deleteProduct":
      response = await deleteProduct(args[1]);
      break;
    default:
      response = { error: "Acción no válida..." };
  }

  console.log(response);
};

main();
