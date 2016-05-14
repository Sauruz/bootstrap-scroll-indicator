# Bootstrap Scroll Indicator

A dynamic page length indicator for a Bootstrap navbar

## Usage
-----

You can install Bootstrap Scroll Indicator through bower:

```bash
bower install bootstrap-scroll-indicator
```

Include bootstrap-scroll-indicator.min.css in your header. 

```
    <head>
        <link href="build/bootstrap-scroll-indicator.min.css" rel="stylesheet">
    </head>
```

Add a scrollindicator div at the bottom of your navbar

```
<div class="scroll-indicator-bar"></div>
```

Include bootstrap-scroll-indicator.min.js at the bottom of your file, and initialize the ScrolIndicator class.

```
	<script src="build/bootstrap-scroll-indicator.min.js"></script>
        <script>
            $(document).ready(function () {
                new ScrollIndicator({
                    colorBar: '#E5E5E5',
                    colorIndicator: '#66BB6A',
                    height: 5
                });
            });
        </script>
```

That's it. 