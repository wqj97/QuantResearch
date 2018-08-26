<?php
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App{
/**
 * App\News
 *
 * @property int $id
 * @property string $title
 * @property string $content
 * @property string $classify
 * @property string $url
 * @property array $analysis
 * @property string|null $deleted_at
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereAnalysis($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereClassify($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereUrl($value)
 */
	class News extends \Eloquent {}
}

namespace App{
/**
 * App\ProductConfig
 *
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property array $code
 * @property array $config
 * @property int|null $selfSelected
 * @property int|null $deposit
 * @property int|null $amount
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereConfig($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereDeposit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereSelfSelected($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereUserId($value)
 */
	class ProductConfig extends \Eloquent {}
}

namespace App{
/**
 * App\UserLoginRecord
 *
 * @property int $id
 * @property int $user_id
 * @property string $ip
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \App\User $user_info
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserLoginRecord whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserLoginRecord whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserLoginRecord whereIp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserLoginRecord whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserLoginRecord whereUserId($value)
 */
	class UserLoginRecord extends \Eloquent {}
}

namespace App{
/**
 * App\PayOrder
 *
 * @property int $id
 * @property int $user_id
 * @property int $total_fee
 * @property string $out_trade_no
 * @property string $body
 * @property string|null $prepay_id
 * @property string $status
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \App\User $user_info
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PayOrder whereBody($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PayOrder whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PayOrder whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PayOrder whereOutTradeNo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PayOrder wherePrepayId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PayOrder whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PayOrder whereTotalFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PayOrder whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PayOrder whereUserId($value)
 */
	class PayOrder extends \Eloquent {}
}

namespace App{
/**
 * App\Product
 *
 * @property int $id
 * @property string $name
 * @property float $stableCoefficient
 * @property array $code
 * @property array $names
 * @property array $product1_month
 * @property array $product2_month
 * @property array $openPosition
 * @property array $stopLoss
 * @property array $unit
 * @property bool $stop
 * @property bool $doable
 * @property string|null $func
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\MealGroup[] $group
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Role[] $roles
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereDoable($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereFunc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereNames($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereOpenPosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereProduct1Month($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereProduct2Month($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereStableCoefficient($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereStop($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereStopLoss($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereUnit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereUpdatedAt($value)
 */
	class Product extends \Eloquent {}
}

namespace App{
/**
 * App\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $api_token
 * @property string|null $phone
 * @property string $head
 * @property string $password
 * @property string|null $remember_token
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\MealGroup[] $group
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read \App\ProductConfig $product_config
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Role[] $roles
 * @property-read \App\ProductConfig $self_selected
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Query\Builder|\App\User onlyTrashed()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereApiToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereHead($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\User withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\User withoutTrashed()
 */
	class User extends \Eloquent {}
}

namespace App{
/**
 * App\Role
 *
 * @property int $id
 * @property string $name
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereUpdatedAt($value)
 */
	class Role extends \Eloquent {}
}

namespace App{
/**
 * App\Meal
 *
 * @property int $id
 * @property string $title
 * @property float $price
 * @property string $content
 * @property string $type
 * @property int $meal_group_id
 * @property int $notify
 * @property int $emergentNotify
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @property-read \App\MealGroup $group_info
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Meal whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Meal whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Meal whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Meal whereEmergentNotify($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Meal whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Meal whereMealGroupId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Meal whereNotify($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Meal wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Meal whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Meal whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Meal whereUpdatedAt($value)
 */
	class Meal extends \Eloquent {}
}

namespace App{
/**
 * App\MealGroup
 *
 * @property int $id
 * @property string $name
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Meal[] $group_item
 * @method static \Illuminate\Database\Eloquent\Builder|\App\MealGroup whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\MealGroup whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\MealGroup whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\MealGroup whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\MealGroup whereUpdatedAt($value)
 */
	class MealGroup extends \Eloquent {}
}

