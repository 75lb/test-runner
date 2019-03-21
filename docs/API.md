<a name="module_test-runner-core"></a>

## test-runner-core

* [test-runner-core](#module_test-runner-core)
    * [TestRunnerCore](#exp_module_test-runner-core--TestRunnerCore) ⏏
        * [new TestRunnerCore([options])](#new_module_test-runner-core--TestRunnerCore_new)
        * [.state](#module_test-runner-core--TestRunnerCore+state) : <code>string</code>
        * [.tom](#module_test-runner-core--TestRunnerCore+tom) : <code>TestObjectModel</code>
        * [.ended](#module_test-runner-core--TestRunnerCore+ended) : <code>boolean</code>
        * [.view](#module_test-runner-core--TestRunnerCore+view) : <code>View</code>
        * [.stats](#module_test-runner-core--TestRunnerCore+stats)
        * [.start()](#module_test-runner-core--TestRunnerCore+start) ⇒ <code>Promise</code>
        * ["in-progress" (testCount)](#module_test-runner-core--TestRunnerCore+event_in-progress)
        * ["start" (testCount)](#module_test-runner-core--TestRunnerCore+event_start)
        * ["fail"](#module_test-runner-core--TestRunnerCore+event_fail)
        * ["pass"](#module_test-runner-core--TestRunnerCore+event_pass)
        * ["end"](#module_test-runner-core--TestRunnerCore+event_end)

<a name="exp_module_test-runner-core--TestRunnerCore"></a>

### TestRunnerCore ⏏
**Kind**: Exported class  
**Emits**: <code>event:start</code>, <code>event:end</code>  
<a name="new_module_test-runner-core--TestRunnerCore_new"></a>

#### new TestRunnerCore([options])

| Param | Type |
| --- | --- |
| [options] | <code>object</code> | 
| [options.view] | <code>function</code> | 
| [options.tom] | <code>object</code> | 

<a name="module_test-runner-core--TestRunnerCore+state"></a>

#### testRunnerCore.state : <code>string</code>
State machine: pending -> in-progress -> pass or fail

**Kind**: instance property of [<code>TestRunnerCore</code>](#exp_module_test-runner-core--TestRunnerCore)  
<a name="module_test-runner-core--TestRunnerCore+tom"></a>

#### testRunnerCore.tom : <code>TestObjectModel</code>
Test Object Model

**Kind**: instance property of [<code>TestRunnerCore</code>](#exp_module_test-runner-core--TestRunnerCore)  
<a name="module_test-runner-core--TestRunnerCore+ended"></a>

#### testRunnerCore.ended : <code>boolean</code>
Ended flag

**Kind**: instance property of [<code>TestRunnerCore</code>](#exp_module_test-runner-core--TestRunnerCore)  
<a name="module_test-runner-core--TestRunnerCore+view"></a>

#### testRunnerCore.view : <code>View</code>
View

**Kind**: instance property of [<code>TestRunnerCore</code>](#exp_module_test-runner-core--TestRunnerCore)  
<a name="module_test-runner-core--TestRunnerCore+stats"></a>

#### testRunnerCore.stats
Runner stats

**Kind**: instance property of [<code>TestRunnerCore</code>](#exp_module_test-runner-core--TestRunnerCore)  
<a name="module_test-runner-core--TestRunnerCore+start"></a>

#### testRunnerCore.start() ⇒ <code>Promise</code>
Start the runner

**Kind**: instance method of [<code>TestRunnerCore</code>](#exp_module_test-runner-core--TestRunnerCore)  
<a name="module_test-runner-core--TestRunnerCore+event_in-progress"></a>

#### "in-progress" (testCount)
in-progress

**Kind**: event emitted by [<code>TestRunnerCore</code>](#exp_module_test-runner-core--TestRunnerCore)  

| Param | Type | Description |
| --- | --- | --- |
| testCount | <code>number</code> | the numbers of tests |

<a name="module_test-runner-core--TestRunnerCore+event_start"></a>

#### "start" (testCount)
Start

**Kind**: event emitted by [<code>TestRunnerCore</code>](#exp_module_test-runner-core--TestRunnerCore)  

| Param | Type | Description |
| --- | --- | --- |
| testCount | <code>number</code> | the numbers of tests |

<a name="module_test-runner-core--TestRunnerCore+event_fail"></a>

#### "fail"
Test suite failed

**Kind**: event emitted by [<code>TestRunnerCore</code>](#exp_module_test-runner-core--TestRunnerCore)  
<a name="module_test-runner-core--TestRunnerCore+event_pass"></a>

#### "pass"
Test suite passed

**Kind**: event emitted by [<code>TestRunnerCore</code>](#exp_module_test-runner-core--TestRunnerCore)  
<a name="module_test-runner-core--TestRunnerCore+event_end"></a>

#### "end"
Test suite ended

**Kind**: event emitted by [<code>TestRunnerCore</code>](#exp_module_test-runner-core--TestRunnerCore)  