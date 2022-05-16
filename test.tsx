interface TypeA<X> {}
interface TypeB {}

type Test = TypeA<
    `do${TypeA<TypeB>}Some`,
    TypeB
>

interface TypeC extends TypeB {
    someField: TypeB
}
