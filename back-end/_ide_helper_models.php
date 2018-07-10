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
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereAnalysis($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereClassify($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereContent($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereCreatedAt($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereDeletedAt($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereId($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereTitle($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereUpdatedAt($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\News whereUrl($text)
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
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereAmount($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereCode($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereConfig($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereCreatedAt($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereDeletedAt($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereDeposit($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereId($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereName($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereSelfSelected($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereUpdatedAt($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProductConfig whereUserId($text)
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
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserLoginRecord whereCreatedAt($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserLoginRecord whereId($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserLoginRecord whereIp($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserLoginRecord whereUpdatedAt($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserLoginRecord whereUserId($text)
 */
	class UserLoginRecord extends \Eloquent {}
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
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Role[] $roles
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereCode($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereCreatedAt($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereDoable($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereFunc($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereId($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereName($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereNames($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereOpenPosition($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereProduct1Month($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereProduct2Month($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereStableCoefficient($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereStop($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereStopLoss($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereUnit($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Product whereUpdatedAt($text)
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
 * @property-read \App\ProductConfig $product_config
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Role[] $roles
 * @property-read \App\ProductConfig $self_selected
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Query\Builder|\App\User onlyTrashed()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereApiToken($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCreatedAt($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereDeletedAt($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereEmail($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereHead($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereId($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereName($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePassword($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePhone($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereRememberToken($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUpdatedAt($text)
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
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereCreatedAt($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereId($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereName($text)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereUpdatedAt($text)
 */
	class Role extends \Eloquent {}
}

