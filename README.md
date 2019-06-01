##In your angular controller
``` javascript
$scope.listItems = [
	{ title: 'Alex', id: 53452353453, remark: '28', subtitle: 'users'},
	{ title: 'Marie', id: 11241231242, remark: '29', subtitle: 'lovers'},
	{ title: 'Camille', id: 123123134234, remark: '25', subtitle: 'friends'},
];

$scope.tiles = [
	{ title: 'Users', icon: 'fa-users', color: 'red', href: '#/users'},
	{ title: 'Settings', icon: 'fa-cogs', color: 'orange', href: '#/settings'},
	{ title: 'Prices', icon: 'fa-tags', color: 'darkCyan', href: '#/prices'},
];
```

##In your view
``` html
<div class="row">
	<div class="col-md-6">
		<metro-tiles tiles="tiles"/>
	</div>
	<div class="col-md-6">
		<metro-list 
			new-item-href="#/item/new"
			manage-item-href="#/item/manage" 
			new-item-title="new item" 
			items="listItems"
			title="Items List"></metro-list>
	</div>
</div>

```
