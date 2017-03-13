<?php $this->load->view('/m/common/header');?>
	<!-- 菜单 -->
	<?php $this->load->view('/m/common/menu');?>
	<!-- 菜单 -->
	<div class="animation-translate main">
		<div class="container show" user-id="<?php echo $user_info ? $user_ifno['id'] : "";?>">
		
			<?php if($atlas_list){?>
			<?php foreach($atlas_list as $val){?>
			<div class="show-item">
				<div class="auto-height">
					<div class="auto-position" atlas-id="<?php echo $val['id'];?>">
						<a class="item-link" href="/ainfo/<?php echo $val['id'];?>"><img class="center" data-original="<?php echo $val['cover']?>" /></a>
					</div>
					<span class="c-fff show-like"><i class="icons <?php echo $val['is_like'] ? "icon-like" : "icon-unlike";?>"></i><?php echo $val[like_num];?></span>
				</div>
				<div class="show-info">
					<div class="show-head">
						<a class="item-link" title="<?php echo $val['username'];?>" href="/album/<?php echo $val['cameraman_id'];?>"><img class="center" data-original="<?php echo $val['face'] ? $val['face'] :"/uploads/avatar/default.png";?>" /></a>
					</div>
					<p class="c-464646 show-desc"><?php echo $val['title'];?></p>
				</div>
			</div>
			<?php } }?>
		</div>
		<div id="navBtn" class="nav-btn">
			<div class="btn-border">
				<div class="btn-bg"><span></span><span></span><span></span></div>
			</div>
		</div>
	</div>
	<script src="/public/m/js/app.js"></script>
<?php $this->load->view('/m/common/footer');?>