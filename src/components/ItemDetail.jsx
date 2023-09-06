import React from 'react'
import ItemCountJs from './ItemCountJs'
import { useParams } from 'react-router-dom'

const ItemDetail = (p) => {
    const {id} = useParams()
    const filteredProducts = p.filter((producto) => producto.id == id)
  return (
    <>
    {filteredProducts.map((p) => 
    <div key={p.id}>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{p.nombre}</Heading>
                    <Text>
                    {p.descripcion}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                    ${p.precio}
                    </Text>
                    <ItemCountJs>
                    </ItemCountJs>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <flexbox>
                        <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Comprar
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Detalle
                        </Button>
                        </ButtonGroup>
                        <ItemCountJs>
                        </ItemCountJs>
                    </flexbox>
                </CardFooter>
            </Card>
            </div>
            )} </>
  )
}

export default ItemDetail