<template>
    <div>
        <h1>V-Model</h1>
        <label v-text="inputText"></label>
        <input type="text" v-model="inputText">

        <div class="box">
            <form action="">
                <div>
                    <p for="">What do you need?</p>
                    <input type="text" placeholder="item name..." v-model="nameIten">
                </div>
                <div>
                    <p for="">How many?</p>
                    <input type="number" placeholder="number of items" v-model="numberItem">
                </div>
                <button type="submit" @click.prevent="additem">Add item</button>
            </form>
        </div>
        <p>Shopping List:</p>
        <ul v-for="item of shoppingList" :key="item">
            <li>{{item.name}} ; {{item.number}}</li>
        </ul>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            inputText: 'Hello',
            nameIten:'',
            numberItem:'',
            shoppingList: [
                {name:'Tomato', number:5}
            ]
        }
    },
    methods: {
        additem() {
            let item = {
                name: this.nameIten,
                number: this.numberItem
            }
            this.shoppingList.push(item)
            this.nameIten = ''
            this.numberItem = ''
            console.log(this.shoppingList)
        }
    }
}
</script>

<style>
.box {
    width: 30%;
    display: flex;
    border: 1px solid;
    margin: 10px;
    justify-content: space-between;
}

</style>