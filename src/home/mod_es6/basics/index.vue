<template>
    <div>
        <jp-com-mode :title="'基础内容，后续会细分'"></jp-com-mode>
        <jp-com-mode :title="'reset参数'">
            <p>（...变量名）这种三个点加一个变量的参数形式又叫reset参数。他的作用等同于arguments;</p>
            <div>
                <jp-output-code>
                    reset (...values) {
                        console.log(values); // 1,2,3,4,5, [6,7]
                        console.log(arguments); // 1,2,3,4,5, [6,7]
                        console.log(values === arguments); //false;
                    }
                    this.reset(1,2,3,4,5, [6,7]);
                </jp-output-code>
            </div>
            <p> <span>例如：</span> function reset(...values){};//这个values，实际上就是arguments的另外一种实现方式。</p>
            <div>
                <jp-output-code>
                    // arguments变量的写法
                    //
                    function sortNumbers() {
                        return Array.prototype.slice.call(arguments).sort();
                    }

                    // rest参数的写法
                    const sortNumbers = (...numbers) => numbers.sort();
                </jp-output-code>
            </div>
            <p>
                <span>不同点：</span>arguments并不是一个真正的数组，他只是一个类数组，而reset的写法，他是一个真正的数组，可以使用数组的方法 。

            </p>
        </jp-com-mode>
        <jp-com-mode :title="'spread扩展运算符'">
            <p>是将数组中的每一项展示出来。例如：let arr = [1,2], arr1 = [3,4];let newArr = [...arr,...arr1]; // [1,2,3,4] </p>

        </jp-com-mode>
        <jp-com-mode :title="'数组实例的 flat()，flatMap()'">
            <div>
                <p>数组的成员有时还是数组，Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。</p>
                <p>值的注意的是，这种方法 只能拉平一层数组，即二维数组</p>
            </div>
            <div>
                <jp-output-code>
                    [1, 2, [3, 4]].flat()
                    // [1, 2, 3, 4]
                    //
                    [1, 2, [3, [4, 5]]].flat() ;//这是一个三维数组，期望得到的值是1,2,3,4,5,实际得到的结果是1,2,3 ,[4,5]
                </jp-output-code>
            </div>
            <div>
                <p>如果我想拉平二维数组，甚至多维数组，需要如何处理</p>
                <jp-output-code>
                        [1, 2, [3, [4, 5]]].flat(2) ;//这是拉平三维数组 结果是 1，2，3，4，5
                        但是
                            有时，我们自己也不知道我需要处理的这个数据是个几维的。
                        [ 1, [2, [3]]].flat(Infinity)
                        // [1, 2, 3]
                </jp-output-code>
            </div>
            <div>
                <p>如果原数组有空位，flat()方法会跳过空位。[1, 2, , 4, 5].flat(); // [1, 2, 4, 5]//</p>
            </div>
            <div>
                <p>
                    flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。
                </p>
            </div>
        </jp-com-mode>
        <jp-com-mode :title="'Set与Map'">
            <div>
                <p>Set 本身是一个构造函数，用来生成 Set 数据结构。类似于数组。但是成员的值都是唯一的，没有重复的值。</p>
                <p>Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。</p>
            </div>
            <jp-com-mode :title="'问题'">
                <div>
                    <p>set结构转换成数组后可以输出到页面</p>
                    <span v-for="(item, index) in setArr" :key="index"> {{item}} &nbsp;- &nbsp;</span>
                    <p>为什么Set结构循环输出到页面不起作用。如果这是set的一个特性，是不是表示Set只能用于js</p>
                    <span v-for="(item, index) in set" :key="index"> {{item}} &nbsp;- &nbsp;</span>
                </div>
                <jp-output-code>
                    &lt;p&gt; set结构转换成数组后可以输出到页面 &lt;/p&gt;
                    &lt;span v -for="item in setArr" &gt;  {item} &nbsp;- &nbsp; &lt;/span&gt;
                    &lt;p&gt; 为什么Set结构循环输出到页面不起作用。 &lt;/p&gt;
                    &lt;span v -for="item in set" &gt; {item} &nbsp;- &nbsp; &lt;/span&gt;
                </jp-output-code>
            </jp-com-mode>
        </jp-com-mode>
    </div>
</template>

<script>

/*eslint-disable*/
export default {
    name: 'firstindex',
    data () {
        return {
            isMode: false,
            setArr: [],
            set: new Set()
        }
    },
    mounted () {
        let arr = [1,2,3,4,5, [6,[7]]];
        this.reset(...arr, 1);
        this.push([1, 2],1,3,5);
        this.sum(...arr);
        // this.set = new Set();
        [2, 3, 5, 4, 5, 2, 2].forEach(x => this.set.add(x));
        console.log(this.set);
        this.setArr = [...this.set];
    },
    methods: {
        reset (...values) {
            console.log(values);
            console.log(arguments);
            console.log(values === arguments);
        },
        push (array, ...items) {
            let newArr = array.concat(items)
            console.log(array);
            console.log(items)
            console.log(newArr)
        },
        sum (x, y) {
            console.log(x,y,'sum')
        }
    }

}
</script>

<style>

</style>
