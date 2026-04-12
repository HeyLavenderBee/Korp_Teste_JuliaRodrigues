using NotaFiscalAPI.Models;

namespace NotaFiscalAPI.Routes
{
    public static class ProductRoutes
    {
        public static List<Product> Products = new()
        {
            new (Guid.NewGuid(), "Darcy Plush", 1),
            new (Guid.NewGuid(), "Wonderhoy Potion", 2)
        };

        public static void MapProductRoutes(this WebApplication app)
        {
            app.MapGet("/products", () =>
            {
                return Products;
            });

            app.MapPost("/products", (Product product) =>
            {
                product.Codigo = Guid.NewGuid(); //gera um codigo, ao inves do angular
                Products.Add(product);
                return product;
            });
        }
    }
}
