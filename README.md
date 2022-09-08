# react-product-card

This is a testing package about NPM deploy

### Jesús Flores

## Example

```
import {ProductCard, ProductButtons, ProductImage, ProductTitle} from '../src/components';

<ProductCard
    key={product.id}
    product={product}
    initialValues={{ count: 4, maxCount: 10 }}
>
    {(args) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )}
</ProductCard>
```
